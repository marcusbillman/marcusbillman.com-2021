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
    getFeaturedProjects: (state) => {
      return state.projects.filter((project) => project.featured);
    },
  },
  mutations: {
    setProjects(state, value) {
      state.projects = value;
    },
  },
});

export default store;
