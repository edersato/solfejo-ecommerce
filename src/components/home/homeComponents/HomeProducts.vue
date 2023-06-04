<template>
  <div id="homeProduct">
    <h1 class="mb-5">Produtos Mais Buscados</h1>
    <div>
      <b-card-group deck>
        <b-card
          title="Guitarra Tagima"
          :img-src="cardProduct01"
          img-alt="Guitarra Tagima"
          img-top>

          <h6>R$5700,00</h6>
          <b-card-text>Guitarra Tagima Jet Blues Cosmos Vermelha</b-card-text>
          <b-button class="btnProduct" to="/product">Saiba Mais</b-button>
        </b-card>

        <b-card
          title="Guitarra Ibanez"
          :img-src="cardProduct02"
          img-alt="Guitarra Ibanez"
          img-top>

          <h6>R$6200,00</h6>
          <b-card-text>Guitarra Ibanez Epiphone A5 73G Rosa</b-card-text>
          <b-button>Saiba Mais</b-button>
        </b-card>

        <b-card
          title="Guitarras Gibson"
          :img-src="cardProduct03"
          img-alt="Guitarras Gibson"
          img-top>
          <b-card-text>Seleção de guitarras Gibson sob demanda e pedido antecipado</b-card-text>
          <b-button>Saiba Mais</b-button>
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
#homeProduct {
  margin: 2.5em 7em;

  button, .btnProduct {
    background: #d95621;
    border: #d95621;
  }
}

h1 {
  text-align: center;
  font-weight: bold;
  color: #d95621;
}

@media (min-width: 319px) and (max-width: 500px) {
  #homeProduct {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0;

    h1 {
      font-size: 1em;
    }
  }
}

@media (min-width: 501px) and (max-width: 768px) {
    #homeProduct {
      display: flex;
      flex-direction: column;
      margin: 1em;
      text-align: center;
    h1 {
      font-size: 2em;
    }
  }
}
</style>