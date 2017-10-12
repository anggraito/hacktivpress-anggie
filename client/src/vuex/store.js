import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const http = axios.create({
  baseURL: 'http://localhost:3000/api'
})

const store = new Vuex.Store({
  state: {
    articles: []
  },
  mutations: {
    setArticles (state, payload) {
      state.articles = payload
    }
  },
  actions: {
    getArticles ({ commit }) {
      http.get('/articles')
      .then(articles => {
        commit('setArticles', articles.data)
      })
      .catch(err => console.error(err))
    }
  }
})

export default store
