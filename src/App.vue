<template>
  <div id="app">
    <header>
      <HeadNav />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import HeadNav from './components/shared/HeadNav.vue'
import Footer from './components/shared/Footer.vue'
export default {
  components: {
    HeadNav, Footer
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600&display=swap');

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Cairo', sans-serif;
}

</style>

<style scoped>

/* 
base color

base = #a52a2a
sdef = #D95621 (laranja)
sdef = #403029 (preto)
sdef = #58B158 (verde escuro)
sdef = #61D921 (verde claro) 

*/
</style>
