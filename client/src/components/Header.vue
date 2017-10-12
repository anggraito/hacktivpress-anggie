<template>
  <nav class="navbar">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link class="navbar-brand">HacktivExpress</router-link> <!-- //:to="'/'" -->
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
        <ul class="nav navbar-nav navbar-right">
          <li><router-link >Login</router-link></li> <!-- :to="'/login'" -->
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
.nav-bar{
  background-color: #dedede;
}
</style>
