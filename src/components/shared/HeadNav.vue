<template>
  <div>
    <b-navbar toogleable="lg" type="dark" variant="dark">
        <b-navbar-brand to="/">SantriWebTest</b-navbar-brand>
        <b-navbar-nav>
            <routerlink to="/">Home</routerlink>
            <routerlink to="product">Produto</routerlink>
            <routerlink to="cart">Carrinho</routerlink>
        </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<style lang="scss" scoped>
.navbar-nav {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;

    a {
        color: white;
        padding: 0 1em;
        transition: 0.5s ease-out;

        &:hover {
            color: deepskyblue;
            transition: 0.5s ease-in;
            text-decoration: none;
        }
    }
}
</style>
