<template>
  <q-page class="flex flex-center">

    <div class="header">

      <div class="title">

        <h1>O que vamos estudar hoje?</h1>
        <p id="batatinha" :onload='carregaDados()'>{{teste}}</p>

      </div>

      <div class="materias">

        <q-list>

          <h3>Matérias que você começou</h3>

          <q-separator />

          <q-item clickable v-ripple>
            <q-item-section avatar>

              <q-avatar>

                <img src="https://cdn.quasar.dev/img/boy-avatar.png">

              </q-avatar>

            </q-item-section>

            <q-item-section>Exercício 4 de português - Consoantes</q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple>

            <q-item-section avatar>

              <q-avatar rounded color="purple" text-color="white" icon="bluetooth" />

            </q-item-section>

            <q-item-section> Exercício 2 em matemática - Soma </q-item-section>

          </q-item>

        </q-list>

      </div>


      <section>

       <div id="feedCont">

          <q-list>

            <q-item v-for="feed in feeds" :key="feed.id" clickable v-ripple>

            <q-item-section>
              <q-avatar>
                  <img :src="`{feed.foto}`">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label> {{feed.titulo}} </q-item-label>
              <p>{{feed.texto}}</p>
              <p>Pontuação: {{feed.pontuacao}}</p>
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

const feeds = [{

  id: 1,
  titulo: "Pailhares terminou o conjunto de matemática",
  foto: "https://cdn.quasar.dev/img/boy-avatar.png",
  texto:"Quero ver você passar a minha pontuação",
  pontuacao: 5060

}, {

  id: 2,
  titulo: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  foto:"https://cdn.quasar.dev/img/boy-avatar.png",
  texto:"Quisque varius tellus a luctus imperdiet. Quisque elit neque, consequat id nibh eget, consequat porta massa. Nullam aliquet commodo lorem, nec volutpat.",
  pontuacao: 987941

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

  background-color: #add8e6;

}

h1 {

  color: #ffffff;
  text-align: center;
  font-size: 50px;
  font-family: Arial, Helvetica, sans-serif;
  text-shadow: 2px 2px 4px #000000;

}

.materias{

  background-color: pink;

}

.feedCont{

  background-color: #ffffff;

}

</style>

