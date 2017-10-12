<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link class="navbar-brand" :to="'/'">HacktivExpress</router-link>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
        <ul class="nav navbar-nav navbar-right">
          <li><router-link :to="'/login'">Login</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {

}
</script>

<style>

</style>
