import { loadUsersByPage } from '../use-cases/load-users-by-page';

const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async () => {
  const { users, pages } = await loadUsersByPage(state.currentPage + 1);

  if (state.currentPage >= pages) return;

  state.users = users;
  state.currentPage+= 1;
};

const loadpreviousPage = async () => {
  if (state.currentPage === 1) return;
  const { users } = await loadUsersByPage(state.currentPage - 1);

  state.users = users;
  state.currentPage-= 1;
};

/**
 *
 * @param {User} user
 */
const onUserChanged = (updatedUser) => {
  let wasFound = false;
  state.users = state.users.map((user) => {
    if (user.id === updatedUser.id) {
      wasFound = true;
      return updatedUser;
    }
    return user;
  });

  if (state.users.length < 10 && !wasFound) {
    state.users.push(updatedUser);
  }
};

const reloadPage = async () => {
  const { users } = await loadUsersByPage(state.currentPage);

  if (users.length === 0) {
    await loadpreviousPage();
    return;
  }

  state.users = users;
};

export default {
  loadNextPage,
  loadpreviousPage,
  reloadPage,
  onUserChanged,

  /**
   *
   * @returns {User[]}
   */
  getUsers: () => [...state.users],
  /**
   *
   * @returns {Number}
   */
  getCurrentPage: () => state.currentPage,
};
