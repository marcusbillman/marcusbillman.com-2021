import { createStore } from 'vuex'
import sanityClient from '@/utilities/sanityConfig'

const store = createStore({
  state() {
    return {
      projects: [],
      menuOpen: false
    }
  },
  actions: {
    fetchContent(context) {
      const query = `*[ _type == 'project' ]{
        ...,
        'roleTags': *[ _type == 'roleTag' && _id in ^.roleTags[]._ref ],
        'techTags': *[ _type == 'techTag' && _id in ^.techTags[]._ref ]
      }`

      sanityClient.fetch(query).then((result) => {
        context.commit('setProjects', result)
      })
    }
  },
  getters: {
    getProjectBySlug: (state) => (slug) => {
      return state.projects.find((project) => project.slug.current === slug)
    },
    getIndexBySlug: (state, getters) => (slug) => {
      const project = getters.getProjectBySlug(slug)
      return state.projects.indexOf(project)
    },
    getNextProject: (state, getters) => (currentSlug) => {
      let nextProjectIndex = getters.getIndexBySlug(currentSlug) + 1
      if (nextProjectIndex > state.projects.length - 1) nextProjectIndex = 0
      return state.projects[nextProjectIndex]
    },
    getPrevProject: (state, getters) => (currentSlug) => {
      let prevProjectIndex = getters.getIndexBySlug(currentSlug) - 1
      if (prevProjectIndex < 0) prevProjectIndex = state.projects.length - 1
      return state.projects[prevProjectIndex]
    },
    getFeaturedProjects: (state) => {
      return state.projects.filter((project) => project.featured)
    },
    getProjectCount: (state) => {
      return state.projects.length
    }
  },
  mutations: {
    setProjects(state, value) {
      const sortedArray = value.sort((a, b) => {
        return a.sortingIndex - b.sortingIndex
      })
      state.projects = sortedArray
    },
    setMenuOpen(state, value) {
      state.menuOpen = value
    },
    toggleMenuOpen(state) {
      state.menuOpen = !state.menuOpen
    }
  }
})

export default store
