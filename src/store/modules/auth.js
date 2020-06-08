import api from '../../api/firebase';
import router from '../../router';

const state = {
  user: null,
  token: localStorage.getItem('firebase_token'),
  loading: false,
  error: null,
};

const getters = {
  isAuthenticated: state => !!state.user,
  isLoading: state => state.loading,
  error: state => state.error,
  user: state => state.user,
};

const actions = {
  async login({ commit }) {
    commit('setLoading', true);
    try {
      const { user, token } = await api.login();
      commit('setUser', user);
      commit('setToken', token);
      localStorage.setItem('firebase_token', token);
    } catch (error) {
      commit('setError', error.message);
    } finally {
      commit('setLoading', false);
    }
  },
  async logout({ commit }) {
    commit('setLoading', true);
    try {
      await api.logout();
      localStorage.removeItem('firebase_token');
      router.push('/');
    } catch (error) {
      commit('setError', error.message);
    } finally {
      commit('setLoading', false);
    }
  },
  changeAuthState({ commit }, user) {
    commit('setUser', user);
    if (!user) {
      commit('setToken', null);
    }
  },
  setLoading({ commit }, loadingState) {
    commit('setLoading', loadingState);
  },
};

const mutations = {
  setUser(state, user) {
    state.user = user ? user : null;
  },
  setToken(state, token) {
    state.token = token ? token : null;
  },
  setLoading(state, loadingState) {
    state.loading = loadingState;
  },
  setError(state, error) {
    state.error = error;
    state.error = error;
  },
};

export default { state, getters, actions, mutations };
