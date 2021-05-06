import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      projects: [],
      menuOpen: false,
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
    setMenuOpen(state, value) {
      state.menuOpen = value;
    },
    toggleMenuOpen(state) {
      state.menuOpen = !state.menuOpen;
    },
  },
});

export default store;
