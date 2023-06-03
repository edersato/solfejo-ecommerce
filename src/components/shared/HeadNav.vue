<template>
  <div>
    <b-navbar toggleable="lg" class="navHeader" sticky>
        <b-navbar-brand to="/">
            <img src="../../assets/solfejo.png" alt="Solfejo logo" class="mx-2 w-50 logo">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav class="justify-content-end">
            <b-navbar-nav>
                <router-link to="/">
                <b-icon-house-fill /> Home
                </router-link>

                <router-link to="/product">
                <b-icon-bag-fill /> Produto
                </router-link>

                <router-link to="/cart">
                    <b-icon-cart-fill /> Carrinho
                </router-link>

                <router-link to="/about">
                    <b-icon-person-fill /> Usuário
                </router-link>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { BIconCart, BIconBagFill, BIconHouseFill, BIconPersonFill } from 'bootstrap-vue'

export default {
    components: {
        BIconCart,
        BIconBagFill,
        BIconHouseFill,
        BIconPersonFill
    }
    
}
</script>

<style lang="scss" scoped>
.navHeader {
    background: brown;
}

.logo {
    filter: invert(1);
}

.navbar-nav {
    display: flex;
    justify-content: space-evenly;

    a {
        color: white;
        padding: 0 1em;
        transition: 0.5s ease-out;
        text-decoration: none;
        font-size: 1.2em;

        &:hover {
            color: papayawhip;
            transition: 0.5s ease-in;
            text-decoration: none;
        }
    }
}
</style>
