<template>
  <div>
    <h2>Produtos Mais Buscados</h2>
    <div class="d-flex">
      <b-card-group deck>
        <b-card
          title="Guitarra Tagima"
          :img-src="cardProduct01"
          img-alt="Guitarra Tagima"
          img-top
          class="card01"
        >
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </b-card-text>
          <template #footer>
            <small class="text-muted">Last updated 3 mins ago</small>
          </template>
        </b-card>

        <b-card
          title="Guitarra Epiphone"
          :img-src="cardProduct02"
          img-alt="Image"
          img-top
          class="card01"
        >
          <b-card-text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </b-card-text>
          <template #footer>
            <small class="text-muted">Last updated 3 mins ago</small>
          </template>
        </b-card>

        <b-card
          title="Guitarra Gibson"
          :img-src="cardProduct03"
          img-alt="Image"
          img-top
          class="card01"
        >
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </b-card-text>
          <template #footer>
            <small class="text-muted">Last updated 3 mins ago</small>
          </template>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import cardProduct01 from "@/assets/sitePhotos/guitarTagima.png";
import cardProduct02 from "@/assets/sitePhotos/guitarEpiphone.png";
import cardProduct03 from "@/assets/sitePhotos/guitarGibson.jpg";
export default {
  data() {
    return {
      cardProduct01,
      cardProduct02,
      cardProduct03,
    };
  },
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
  font-weight: bold;
  color: #d95621;
}

.card01 {
  img {
    width: 10%;
  }
}
</style>