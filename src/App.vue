<template>
  <div id="app">
    <header>
      <HeadNav />
    </header>
  </div>
</template>

<script>
import HeadNav from './components/shared/HeadNav.vue'
export default {
  components: {
    HeadNav
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
  }
}
</style>
