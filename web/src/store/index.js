import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      projects: [],
    };
  },
  mutations: {
    setProjects(state, value) {
      state.projects = value;
    },
  },
});

export default store;
