<template>
  <div id="headerHome">
    <b-card
      overlay
      :img-src="cardImageHeader"
      img-alt="homem segurando um violão"
    >
    </b-card>
    <div class="bottomInfo">
      <p>Potencialize sua música e amplifique seu som!</p>
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

  p {
    color: white;
    font-weight: bold;
    text-align: center;
    font-size: 1.5em;
  }
}

</style>