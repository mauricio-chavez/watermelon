const state = {
  user: null,
  loading: false,
};

const getters = {
  isAuthenticated: state => !!state.user,
  isLoading: state => state.loading,
};

const actions = {
  changeAuthState({ commit }, user) {
    commit('setUser', user);
  },
  setLoading({ commit }, loadingState) {
    commit('setLoading', loadingState);
  },
};

const mutations = {
  setUser(state, user) {
    state.user = user ? user : null;
  },
  setLoading(state, loadingState) {
    state.loading = loadingState;
  },
};

export default { state, getters, actions, mutations };
