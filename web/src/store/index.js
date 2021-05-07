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
    getNextProject: (state, getters) => (currentSlug) => {
      const currentProject = getters.getProjectBySlug(currentSlug);
      const currentProjectIndex = state.projects.indexOf(currentProject);
      const nextProjectIndex = currentProjectIndex + 1;

      if (nextProjectIndex > state.projects.length - 1) {
        return state.projects[0];
      }
      return state.projects[nextProjectIndex];
    },
    getPrevProject: (state, getters) => (currentSlug) => {
      const currentProject = getters.getProjectBySlug(currentSlug);
      const currentProjectIndex = state.projects.indexOf(currentProject);
      const prevProjectIndex = currentProjectIndex - 1;

      if (prevProjectIndex < 0) {
        return state.projects[state.projects.length - 1];
      }
      return state.projects[prevProjectIndex];
    },
    getFeaturedProjects: (state) => {
      return state.projects.filter((project) => project.featured);
    },
  },
  mutations: {
    setProjects(state, value) {
      const sortedArray = value.sort((a, b) => {
        return a.sortingIndex - b.sortingIndex;
      });
      state.projects = sortedArray;
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
