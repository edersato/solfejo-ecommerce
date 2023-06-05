<template>
  <section>
    <div id="product">
        <div>
            <img src="../../assets//sitePhotos/guitarTagima.png" alt="Guitarra Tagima">
        </div>

        <div class="infoProduct">
            <h4>GUITARRA TAGIMA JET BLUES COSMOS CA DF/PW</h4>
            <p>REF: 00001</p>
            <h6>RS$5700,00</h6>
            <p>10x de R$517,00 sem juros</p>
            <div class="d-flex justify-content-between price">
                <h2>R$5700,00</h2>
                <b-button pill class="btnBuy">Comprar</b-button>
            </div>
            <p>A vista com <b>10% de desconto</b></p>
        </div>
    </div>

    <div id="commentArea">
        <div>
        <b-card no-body>
            <b-tabs card justified>
            <b-tab title="Especificações" class="details">
                <h5>Guitarra Tagima Jet Blues Cosmos CA DF/PW</h5>
                <p> 
                    - Corpo: Cedro semi-acústico
                    <br>
                    - Braço: Pau-marfim – Shape C
                    <br>
                    - Escala: Pau-ferro – 22T – C 25.5” – R 12”
                    <br>
                    - Tampo: Marupá
                    <br>
                    - Nut: Osso – 43mm
                    <br>
                    - Captadores: 2 Tagima Silverbucker Alnico 5 com cover de metal
                    <br>
                    - Controles: 1 Chave seletora de 3 posições, 1 Varitone, 1 Volume e 1 Tonalidade
                    <br>
                    - Ponte: Tune-o-matic e stop tailpiece
                    <br>
                    - Tarraxas: Cromadas e com travas
                    <br>
                    - Cores: Black, Lake placid blue, Olympic white, Honey burst, Orange sparkle, Candy apple
                    <br>
                    - Escudo: Black, Tortoise, Pearloid white
                </p>
            </b-tab>
            <b-tab title="Comentários" class="comments">
                <div>
                    <b-avatar variant="danger" text="LS"></b-avatar>
                    <p class="ml-2">Guitarra muito boa, com uma ótima sonoridade. Segura bem a afinação</p>
                </div>
                <div>
                    <b-avatar variant="secondary" text="PA"></b-avatar>
                    <p class="ml-2">Amplitude do som é perfeita, ótima experiência</p>
                </div>
                <div>
                    <b-avatar variant="info" text="JC"></b-avatar>
                    <p class="ml-2">Ótimo custo benefício 👍</p>
                </div>
            </b-tab>
            </b-tabs>
        </b-card>
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#product {
    display: flex;
    justify-content: space-around;
    margin: 0 10em;

    div > img {
        margin: 1em;
        border: 1px solid #e0e0e0;
    }

    .infoProduct {
        display: flex;
        flex-direction: column;
        justify-content: center;
        line-height: 0.5em;

        h4 {
            font-weight: bold;
        }


        .btnBuy {
            background: #d95621;
            border: #d95621;
        }
    }

}

#commentArea {
    .details {
        display: flex;
        flex-direction: column;

        p {
            line-height: 1.5em;
        }
    }

    .comments > div {
        display: flex;
        padding: 0.5em;
        align-items: baseline;
    }
}

@media (min-width: 319px) and (max-width: 500px) {
    #product {
        flex-direction: column;
        margin: 0;

        img {
            width: 90%;
        }

        .infoProduct {
            text-align: center;

            .price {
                flex-direction: column;
                margin: 1em 0;

                button {
                    margin: 1em 2em;
                }
            }
        }
    }
}

@media (min-width: 501px) and (max-width: 980px) {
    #product {
        flex-direction: column;
        margin: 0;

        img {
            width: 90%;
        }

        .infoProduct {
            text-align: center;

            .price {
                flex-direction: column;
                margin: 1em 0;

                button {
                    margin: 1em 2em;
                }
            }
        }
    }
}

</style>