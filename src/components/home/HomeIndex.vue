<template>
  <section>
    <div>
      <HeaderHome />
    </div>

    <div>
      <HomeProducts />
    </div>

    <div>
      <HomeAcessories />
    </div>

  </section>
  
</template>

<script>
import HeaderHome from './homeComponents/HeaderHome.vue'
import HomeProducts from './homeComponents/HomeProducts.vue'
import HomeAcessories from './homeComponents/HomeAcessories.vue'

export default {
  components: {
    HeaderHome, HomeProducts, HomeAcessories
  }
};
</script>

<style lang="scss" scoped>

</style>