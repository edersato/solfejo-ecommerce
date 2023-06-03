<template>
  <section>
    <div class="p-3">
      <h2>CONTATO</h2>
      <h5>Entre em contato para obter mais informações e novidades!</h5>
    </div>

    <div id="map" />

    <div class="p-3">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          class="mb-3"
          id="input-group-1"
          label="Seu Nome:"
          label-for="input-1"
        >
          <b-form-input
            class="mt-2"
            id="input-1"
            v-model="form.name"
            placeholder="João Exemplo"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class="mb-3"
          id="input-group-2"
          label="Seu e-mail:"
          label-for="input-1"
        >
          <b-form-input
            id="input-2"
            v-model="form.email"
            type="email"
            placeholder="mail@provedor.com"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class="mb-3"
          id="input-group-3"
          label="Número para contato:"
          label-for="input-3"
        >
          <b-form-input
            class="mt-2"
            id="input-3"
            v-model="form.name"
            placeholder="(99) 12345-6789"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class="mb-3"
          id="input-group-4"
          label="Sugestões de produtos"
          label-for="input-4"
        >
          <b-form-textarea class="mb-3"></b-form-textarea>
        </b-form-group>

        <b-form-group id="input-group-4" label-for="input-3" class="mb-3">
          <b-form-select
            id="input-4"
            v-model="form.instrument"
            :options="instruments"
            required
          ></b-form-select>
        </b-form-group>

        <b-button pill type="submit" variant="primary">Enviar</b-button>
        <b-button pill type="reset" variant="danger">Reiniciar</b-button>
      </b-form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        instrument: null,
        checked: [],
        selected: "",
      },
      instruments: [
        { text: "Você é...", value: null },
        "Guitarrista",
        "Vocalista",
        "Baixista",
        "Baterista",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();

      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];

      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>