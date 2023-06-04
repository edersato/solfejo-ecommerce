<template>
  <div>
    <b-card
      overlay
      :img-src="cardImageHeader"
      img-alt="homem segurando um violão"
    >
    </b-card>
    <div class="bottomInfo">
      <h1>Potencialize sua música e amplifique seu som!</h1>
    </div>
  </div>
</template>

<script>
import cardImageHeader from "@/assets/sitePhotos/guitarMan02.jpg";

export default {
  data() {
    return {
      cardImageHeader,
    };
  },
};
</script>

<style lang="scss" scoped>

.bottomInfo {
  position: relative;
  top: -3.5em;
  background: brown;
  opacity: 0.8;

  h1 {
    color: white;
    font-weight: bold;
    text-align: center;
  }
}

</style>