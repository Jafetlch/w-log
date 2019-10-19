import { getData } from '@/helpers/api-queries'

const POSTSTATE = {
  POST: {
    data: [],
    display: [],
    id: null,
    create: false,
    edit: false,
    delete: false,
    public: []
  }
}

const POSTGETTERS = {
  getPosts (state) {
    return state.POST.data
  },
  getPublicPosts (state) {
    return state.POST.public
  },
  getCreatePosts (state) {
    return state.POST.create
  },
  getEditPosts (state) {
    return state.POST.edit
  },
  getDeletePost (state) {
    return state.POST.delete
  },
  getDisplayPosts (state) {
    return state.POST.display
  }
}

const POSTMUTATIONS = {
  setPosts (state, payload) {
    state.POST.data = payload
  },
  setPublicPosts (state, payload) {
    state.POST.public = payload
  },
  setCreatePosts (state, payload) {
    state.POST.create = payload
  },
  setEditPosts (state, payload) {
    state.POST.edit = payload
  },
  setDeletePosts (state, payload) {
    state.POST.delete = payload
  },
  setDisplayPosts (state, payload) {
    state.POST.display = payload
  }
}

const POSTACTIONS = {
  getPosts (context) {
    getData('public/posts')
      .then(response => context.commit('setPublicPosts', response.data))
      .catch(error => context.commit('setGlobalError', error))
  },
  getPostsByUser (context) {
    getData('posts')
      .then(response => context.commit('setPosts', response.data))
      .catch(error => context.commit('setError', error))
  }
}

export { POSTSTATE, POSTGETTERS, POSTMUTATIONS, POSTACTIONS }
