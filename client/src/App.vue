<template>
  <div id="app">
    <header />
    <div class="container-fluid">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
import header from '@/components/Header'
export default {
  name: 'app',
  components: {
    header
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
