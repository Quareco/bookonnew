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

                <img src="https://cdn.quasar.dev/img/boy-avatar.png">

              </q-avatar>

            </q-item-section>

            <q-item-section>Exercício 4 de português - Consoantes</q-item-section>

          </q-item>

          <q-separator />

          <q-item clickable v-ripple>

            <q-item-section avatar>

              <q-avatar rounded color="primary" text-color="white" icon="book" />

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

const feeds = [{

  id: 1,
  titulo: "Palhares bateu um novo recorde",
  foto: "https://cdn.quasar.dev/img/boy-avatar.png",
  texto:"Quero ver você passar a minha pontuação",
  pontuacao: 5060

}, {

  id: 2,
  titulo: "Caio Silva",
  foto:"https://cdn.quasar.dev/img/boy-avatar.png",
  texto:"joguei pra caramba e me sai muito bem Uhuuuul",
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

  background-color: #fe175d;

}

h1 {

  color: #ffffff;
  text-align: center;
  font-size: 50px;
  font-family: Comic, Helvetica, sans-serif;
  text-shadow: 2px 2px 4px #000000;

}

.materias{

  background-color: #f6f7d7;
  margin-left: 6%;
  margin-right: 6%;
  padding-top: 4%;

}

.porco{

  background-color: #f6f7d7;
  margin-top: 50px;
  margin-left: 2%;
  margin-right: 2%;
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
  margin-top: 20px;
  font-family: titulinho1;

}

.oq{

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

