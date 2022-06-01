<template>

  <div>

    <h1>Português</h1>

  </div>

  <h3>Nossos jogos</h3>

  <div>

    <q-item v-for="jogo in jogos" :key="jogo.id">

      <q-card>

        <q-parallax

        src="https://cdn.quasar.dev/img/parallax1.jpg"
        :height="150"

        />

        <q-card-section>

          <div> {{jogo.nome}} </div>
          <div> {{jogo.desc}} </div>
          <div> Sua pontuação: {{jogo.pont}} </div>
          <div>

            <q-btn color="teal">

              <q-icon left size="3em" name="videogame_asset" />
              <div>Jogar!</div>

            </q-btn>

          </div>

        </q-card-section>

      </q-card>

    </q-item>

  </div>

</template>


<script>
import { defineComponent } from 'vue'


  const jogos = [{

    id: 1,
    nome: "Cadê as letras?",
    desc: "Morbi aliquam libero vitae orci malesuada pulvinar Vestibulum sodales ullamcorper imperdiet. Suspendisse dignissim, mi at eleifend porta, justo augue dapibus velit, sollicitudin pulvinar mauris odio non est",
    pont: 6565656,
    // img: "https://cdn.quasar.dev/img/parallax1.jpg"

  },{

    id: 2,
    nome: "Teste",
    desc: "Morbi aliquam libero vitae orci malesuada pulvinar Vestibulum sodales ullamcorper imperdiet. Suspendisse dignissim, mi at eleifend porta, justo augue dapibus velit, sollicitudin pulvinar mauris odio non est",
    pont: 656,
    // img: "https://cdn.quasar.dev/img/parallax1.jpg"

  }]

  export default defineComponent({

    setup (){

      return{

        jogos

      }

    }

  })

</script>
