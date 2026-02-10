import { loadUsersByPage } from '../use-cases/load-users-by-page';

const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async () => {
  await loadUsersByPage(state.currentPage + 1);
};

const loadpreviousPage = async () => {};

const onUserChanged = () => {};

const reloadPage = () => {};

export default {
  loadNextPage,
  loadpreviousPage,
  reloadPage,
  onUserChanged,

  getUser: () => [...state.users],
  getCurrentPage: () => state.currentPage,
};
