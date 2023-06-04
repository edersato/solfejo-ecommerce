<template>
  <div>
    <section class="infoFooter">
        <b-nav vertical class="w-25"> 
            <b-nav-item href="https://github.com/edersato">Sobre Nós</b-nav-item>
            <b-nav-item href="https://www.linkedin.com/in/eder-da-rosa-sato/">Nossa História</b-nav-item>
            <b-nav-item href="https://santri.com.br/home">FAQ</b-nav-item>
        </b-nav>
        <b-nav vertical class="w-75">
            <b-nav-item active>Central do Cliente</b-nav-item>
            <b-nav-item>Acompanhe Seu Pedido</b-nav-item>
            <b-nav-item>Cadastro</b-nav-item>
        </b-nav>
        <div class="socialMediaArea">
            <img src="../../../src/assets/solfejo.png" class="w-50 logo" alt="">
            <div class="icons">
                <b-icon-facebook></b-icon-facebook>
                <b-icon-instagram></b-icon-instagram>
                <b-icon-youtube></b-icon-youtube>
                <b-icon-twitter></b-icon-twitter>
            </div>
        </div>
    </section>
    <section class="footer">
        <div class="footerFinal">
            <img src="../../../src/assets/santri.png" alt="Logo Santri" class="logoSantri mt-2">
            <p>2023 - projeto realizado para Santri</p>
        </div>
    </section>
  </div>
</template>

<script>
import { BIconFacebook, BIconInstagram, BIconYoutube, BIconTwitter } from 'bootstrap-vue'
export default {
    components: {
        BIconFacebook, 
        BIconInstagram, 
        BIconYoutube, 
        BIconTwitter
    }
}
</script>

<style lang="scss" scoped>

.logo {
    filter: invert(1);
}

.nav-item {
    a {
        color: white;
        text-decoration: none;

        &:hover {
            color: peachpuff;
        }
    }
}

.socialMediaArea {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.icons > svg {
    color: white;
    padding-right: 1.5em;
}

// Info Footer 

.infoFooter {
    background: brown; 
    display: flex;
}

// footer

.footer {
    background: #242122;

    .footerFinal {
        display: flex;
        flex-direction: column;
        align-items: center;

        .logoSantri {
            width: 15%;
        }
        
        p {
            color: white;
        }
    }
}

@media (min-width: 319px) and (max-width: 500px) {
    .infoFooter {
        display: none;
    }
}

@media (min-width: 501px) and (max-width: 768px) {
    .infoFooter {
        font-size: 10px;

        .socialMediaArea {
            justify-content: center;
        }

        .icons > svg {
            padding-left: 0.5em;
        }
    }
}
</style>