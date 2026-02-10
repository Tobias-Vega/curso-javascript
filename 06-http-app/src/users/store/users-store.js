const state = {
  currentPage: 0,
  users: []
}

const loadNextPage = async () => {

}

const loadpreviousPage = async () => {
  
}

const onUserChanged = () => {

}


const reloadPage = () => {

}

export default {
  loadNextPage,
  loadpreviousPage,
  reloadPage,
  onUserChanged,

  getUser: () => [...state.users],
  getCurrentPage: () => state.currentPage,
}