<template>
  <div>
    <section class="infoFooter">
        <b-nav vertical class="w-25">
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Another Link</b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
        <b-nav vertical class="w-25">
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Another Link</b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
        <div>
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
            <p>2023 - Santri Web</p>
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

.icons {
    color: white;
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


</style>