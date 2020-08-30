import Vue from 'vue'
import Vuex from 'vuex'
import userAPI from '../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    //在state屬性中的資料，所以component都可以用
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false,
    token: ''
  },
  mutations: {
    // 必須是同步操作
    // 用 store.xxx 調用
    // 在component 用 this.$store.commit('xxx') 調用
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }
      state.token = localStorage.getItem('token')
      state.isAuthenticated = true
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.token = ''
      state.isAuthenticated = true
      localStorage.removeItem('token')
    }
  },
  actions: {
    // 可包含異步操作，作用是提交一個 mutations
    // 用 store.dispatch('xxx') 調用
    // 在component 用 this.$store.dispatch('xxx') 調用

    async fetchCurrentUser({ commit }) {
      try {
        const response = await userAPI.getCurrentUser()

        if (response.statusText !== 'OK')
          throw new Error('can not fetch current user')

        const { id, name, email, image, isAdmin } = response.data

        commit('setCurrentUser', {
          id,
          name,
          email,
          image,
          isAdmin
        })
        return true
      }
      catch (error) {
        console.log(error)
        return false
      }
    },
  },
  modules: {
  }
})
