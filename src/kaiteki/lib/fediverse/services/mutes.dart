import "package:kaiteki/di.dart";
import "package:kaiteki/fediverse/interfaces/mute_support.dart";
import "package:kaiteki/fediverse/model/model.dart";
import "package:kaiteki/model/auth/account_key.dart";
import "package:kaiteki/model/pagination_state.dart";
import "package:riverpod_annotation/riverpod_annotation.dart";

part "mutes.g.dart";

@Riverpod(keepAlive: true)
class MutesService extends _$MutesService {
  late MuteSupport _backend;
  String? _nextId;

  @override
  FutureOr<PaginationState<User>> build(AccountKey key) async {
    final manager = ref.read(accountManagerProvider);
    final account = manager.accounts.firstWhere((a) => a.key == key);
    _backend = account.adapter as MuteSupport;
    return _fetch();
  }

  Future<void> loadMore() async {
    if (state.isLoading) return;
    if (!(state.valueOrNull?.canPaginateFurther ?? false)) return;
    state = const AsyncLoading();
    state = await AsyncValue.guard(() async {
      final pagination = await _backend.getMutedUsers(nextId: _nextId);
      _nextId = pagination.next;
      return PaginationState(
        [...?state.valueOrNull?.list, ...pagination.data],
        _nextId != null,
      );
    });
  }

  Future<PaginationState<User>> _fetch() async {
    final pagination = await _backend.getMutedUsers();
    _nextId = pagination.next;
    return PaginationState(
      pagination.data.toList(),
      _nextId != null,
    );
  }

  Future<void> mute(String id) async {
    await _backend.muteUser(id);
    state = AsyncValue.data(await _fetch());
  }

  Stream<int> muteBatch(Set<String> ids) async* {
    for (var i = 0; i < ids.length; i++) {
      final id = ids.elementAt(i);
      await _backend.muteUser(id);
      yield i;
    }
    state = AsyncValue.data(await _fetch());
  }

  Future<void> unmute(String id) async {
    await _backend.unmuteUser(id);
    state = AsyncValue.data(await _fetch());
  }
}
