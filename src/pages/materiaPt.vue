<template>

  <div class="Portugues" style="margin-top:5%; margin-left:32%;">
                <p>
                    Português </p>
                </div>






    <div class="nossos" style="margin-top:5%; margin-left:30%;">
                <p>
                    Nossos jogos </p>
                </div>




  <div>

    <q-item v-for="jogo in jogos" :key="jogo.id">

      <q-card>


    <img :src="jogo.foto">





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
    nome: "Jornada das Vogais",
    desc: "Viaje pelo o mundo procurando as vogais perdias de uma vila antiga, forme palavras, ajude os moradores, e salve a vila",
    pont: 6565656,
     foto:"https://c4.wallpaperflare.com/wallpaper/482/225/313/pixels-pixel-art-video-games-fez-wallpaper-preview.jpg"

  },{

    id: 2,
    nome: "Problemas de Socialização",
    desc: "Clara tem problemas em socializar e em conversar com pessoas, ajude ela a montar palavras e confessar para a sua paixão",
    pont: 656,
    foto: "https://external-preview.redd.it/nxHch4yftK-zxTfmolK1XT64nXYgyQ4-odriLqbECXM.png?width=640&crop=smart&format=pjpg&auto=webp&s=1bfa9e23775d5c9a66a4dc17205246343d09f37b"

  }]

  export default defineComponent({

    setup (){

      return{

        jogos

      }

    }

  })

</script>
<style lang="scss">

body {
  background-color: #74098a;
}
.nossos{
font-family:textinho1;
color: #ff9a00;
font-size: 30px;
}
.Portugues{
font-family:textinho1;
color: #ff9a00;
font-size: 35px;

}
</style>
