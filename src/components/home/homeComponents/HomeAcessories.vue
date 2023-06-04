<template>
  <div id="homeAcessories">
    <h1 class="mb-5 mt-5">Outros Departamentos</h1>
    <div>
      <b-card-group deck>
        <b-card title="Cabos e acessórios" :img-src="cardProduct04" img-alt="Image" img-top>
          <b-card-text>Cabos para sua guitarra, violão ou microfone. Tudo selecionado para conectar sua vibe com a música.</b-card-text>
          <b-button>Saiba Mais</b-button>
        </b-card>

        <b-card title="Percussão" :img-src="cardProduct05" img-alt="Image" img-top>
          <b-card-text>Cajon, bateria completa e pratos. Tudo para dar o compasso da sua banda.</b-card-text>
          <b-button>Saiba Mais</b-button>
        </b-card>

        <b-card title="Pedais e Amplificadores" :img-src="cardProduct06" img-alt="Image" img-top>
          <b-card-text>Quer um novo efeito para seu solo ou aumentar o volume com estilo? Conheça nossos pedais e amplificadores.</b-card-text>
          <b-button>Saiba Mais</b-button>
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

#homeAcessories {
  background: #eeeeee;
  padding: 2em 12em;

  button {
    background: #d95621;
    border: #d95621;
  }
}

h1 {
  text-align: center;
  font-weight: bold;
  color: #d95621;
}
</style>