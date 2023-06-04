<template>
  <div>
    <h2>Acessórios</h2>
    <div>
      <b-card-group deck>
        <b-card title="Title" :img-src="cardProduct04" img-alt="Image" img-top class="card01">
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </b-card-text>
          <template #footer>
            <small class="text-muted">Last updated 3 mins ago</small>
          </template>
        </b-card>

        <b-card title="Title" :img-src="cardProduct05" img-alt="Image" img-top class="card01">
          <b-card-text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </b-card-text>
          <template #footer>
            <small class="text-muted">Last updated 3 mins ago</small>
          </template>
        </b-card>

        <b-card title="Title" :img-src="cardProduct06" img-alt="Image" img-top class="card01">
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
import cardProduct04 from '@/assets/sitePhotos/cabo.png'
import cardProduct05 from '@/assets/sitePhotos/cajon.png'
import cardProduct06 from '@/assets/sitePhotos/pedals.jpg'

export default {
    data() {
        return {
            cardProduct04, cardProduct05, cardProduct06
        }
    }
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