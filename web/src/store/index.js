import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      projects: [],
    };
  },
  getters: {
    getProjectBySlug: (state) => (slug) => {
      return state.projects.find((project) => project.slug.current === slug);
    },
  },
  mutations: {
    setProjects(state, value) {
      state.projects = value;
    },
  },
});

export default store;
