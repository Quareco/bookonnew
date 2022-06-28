<template>
  <q-page class="flex flex-center">

    <div class="header">

      <div class="title">

        <h1 class="oq">O que vamos estudar hoje?</h1>
        <p id="batatinha" :onload='carregaDados()'>{{teste}}</p>

      </div>

      <div class="materias">

        <q-list>

          <h3 class="jogado">Jogado por último</h3>

          <q-separator />

          <q-item clickable v-ripple>
            <q-item-section avatar>

              <q-avatar>

                <img src="https://img.freepik.com/free-vector/empty-opened-book-pixel-art-style_475147-1505.jpg">

              </q-avatar>

            </q-item-section>

            <q-item-section>Exercício 1 de português - Consoantes</q-item-section>

          </q-item>

          <q-separator />

         <q-item clickable v-ripple>
            <q-item-section avatar>

              <q-avatar>

                <img src="https://img.myloview.com.br/posters/mathematics-pi-number-two-plus-two-example-math-pixel-art-icon-knitted-design-design-for-logo-stickers-web-mobile-app-8-bit-sprites-isolated-vector-illustration-700-250129086.jpg">

              </q-avatar>

            </q-item-section>

            <q-item-section> Exercício 2 em matemática - Soma </q-item-section>

          </q-item>

        </q-list>

      </div>


      <section>

       <div id="feedCont">

          <q-list>

            <q-item class="porco" v-for="feed in feeds" :key="feed.id"  v-ripple>

            <q-item-section>
              <q-avatar class="fotinha">
                  <img :src="feed.foto">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="labelsinha"> {{feed.titulo}} </q-item-label>
              <p class="textinho">{{feed.texto}}</p>
              <p class="pontu">Pontuação:<p class="num">{{feed.pontuacao}}</p></p>
            </q-item-section>

            </q-item>

          </q-list>

        </div>

      </section>

    </div>

  </q-page>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import postService from 'src/FuncoesJson/services'

const feeds = [
    {
        id: 1,
        titulo: "Palhares bateu um novo recorde",
        foto: "https://opgg-static.akamaized.net/images/profile_icons/profileIcon4204.jpg?image=q_auto&image=q_auto,f_webp,w_auto&v=1654157118862",
        texto: "Quero ver você passar a minha pontuação",
        pontuacao: 5060

    },

    {
        id: 2,
        titulo: "Joãozinho",
        foto: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b0dd7779-62ce-46e3-bae4-2086001edf0f/deqn7de-2b285cb2-b52b-4cf6-8adc-d6f71a36cf19.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IwZGQ3Nzc5LTYyY2UtNDZlMy1iYWU0LTIwODYwMDFlZGYwZlwvZGVxbjdkZS0yYjI4NWNiMi1iNTJiLTRjZjYtOGFkYy1kNmY3MWEzNmNmMTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.320ZnffXCF74C7Osh8c0HlEuS-LDx31DqIbPPwar3Po",
        texto: "joguei pra caramba e me sai muito bem Uhuuuul",
        pontuacao: 987941
    },

    {
        id: 2,
        titulo: "Bruninha",
        foto: "https://i.pinimg.com/originals/76/c3/90/76c39028d43598532fc845d8ce1f151e.png",

        texto: "De boa na lagoa",
        pontuacao: 98794
    }

]

export default defineComponent({
  name: 'IndexPage',


  data() {
    return {
      usuario: {
        nome: ''
        },
      teste: '',
      }
  },

  setup (){
    const { list } = postService();

    return{

      feeds

    }
  },

  methods: {
     carregaDados: function() {

      }
  },

  mounted () {
    this.$axios.get('http://localhost:3000/usuario')
      .then((res) => {
        const dataNome = res.data[0].nome
        console.log('data', dataNome)
        this.teste = dataNome
      })
  },

})
</script>


<style lang="scss">

body {
  background-color: #e70fb1;
}

h1 {
  color: #8A2BE2;
  text-align: center;
  font-size: 50px;
  text-shadow: 2px 2px 4px #0e0d0d;
}

.materias{
  background-color: #e6e9ee;
  margin-left: 6%;
  margin-right: 6%;
  padding-top: 4%;
}

.porco{
  background-color: 	#e6e9ee;
  margin-top: 20px;
  margin-left: 2%;
  margin-right: 1%;
  border-radius: 10px;
  padding: 5%;
  margin-bottom: 10%;
}

.fotinha{
  font-size:80px;
  margin-left: 15%;
}

.pontu{
  margin-top: 5%;
  font-size: 15px;
  font-family: titulinho2;
}

.labelsinha{
  font-size: 16px;
  font-family: titulinho2;
}

.textinho{
  font-size: 15px;
  margin-top:3px;
  font-family: titulinho1;
}

.oq{
  color: #e6e9ee;
  font-family: redondinho;
}

.num{
  font-size: 15px;
  font-family: titulinho1;
}

.jogado{
  font-family: titulinho1;
  text-align: center;
}

</style>

