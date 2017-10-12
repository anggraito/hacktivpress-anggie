<template>
  <div class="home">
    <div class="search-input">
      <input type="text" placeholder="-Search by Category-"/>
      <button>Search</button>
    </div>

    <div class="article" v-for="article in articles">
      <h3>Judul: {{article.title}}</h3>
      <p>{{article.content}}</p>
      <small>author: {{article.author.username}}</small>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState([
      'articles'
    ])
  },
  methods: {
    ...mapActions([
      'getArticles'
    ])
  },
  mounted () {
    this.getArticles()
  }
}
</script>

<style>
.article{
  padding: 10px;
  border: 2px solid #dedede;
}
.search-input{
  padding: 10px;
}
</style>
