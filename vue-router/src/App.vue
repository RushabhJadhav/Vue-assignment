<template>
  <div id="app">
    <!-- <add-blog></add-blog> -->
    <!-- <show-blog></show-blog>
    <list-blog></list-blog> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import addBlog from './components/addBlog.vue';
// import showBlog from './components/showBlog.vue';
// import listBlogs from './components/listBlogs.vue';

export default {
  name: 'App',
  components: {
    // "add-blog": addBlog,
    // "show-blog": showBlog,
    // 'list-blog': listBlogs
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
