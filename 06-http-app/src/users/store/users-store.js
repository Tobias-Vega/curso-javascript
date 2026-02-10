import { loadUsersByPage } from '../use-cases/load-users-by-page';

const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async () => {
  const { users, pages } = await loadUsersByPage(state.currentPage + 1);

  if (state.currentPage >= pages) return;

  state.currentPage++;
  state.users = users;
};

const loadpreviousPage = async () => {
  if (state.currentPage === 1) return;
  const { users } = await loadUsersByPage(state.currentPage - 1);

  state.currentPage--;
  state.users = users;
};

const onUserChanged = () => {};

const reloadPage = () => {};

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
