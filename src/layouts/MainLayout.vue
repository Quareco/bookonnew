<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="menus"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="book">
          BookOn
        </q-toolbar-title>

        <p class="vindo"> <div> Bem-vindo Carlos

        <a href="http://localhost:8080/#/perfil">

          <q-avatar>

            <img src="https://i.pinimg.com/originals/36/3f/e3/363fe367184cacc4e7cdba0094510a9a.png"/>

          </q-avatar>

        </a>

        </div>

        </p>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <q-list>
        <q-item-label
          header
          class="menu"
        >
          Menu
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          class="topic"
        />
      </q-list>
    </q-drawer>

    <q-dialog
      v-model="showDialog" >
      <q-card>

        <q-toolbar class="bg-primary text-white">

          <q-toolbar-title class="amibo">
            Amigos
          </q-toolbar-title>

          <q-btn flat icon="close"
          round
          v-close-popup />

        </q-toolbar>

        <q-card-section>

          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png"/>
          </q-avatar>

          pablo -->

            <q-item v-for="feed in feeds" :key="feed.id">

            <q-item-section>
              <q-avatar class="fotinha1">
                  <img :src="feed.foto">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <p class="nomezinho"><b> {{feed.nome}} </b></p>
              <!-- <p><b> Descrição: </b>{{feed.texto}}</p> -->

            </q-item-section>

            </q-item>

        </q-card-section>

      </q-card>

    </q-dialog>

      <q-footer elevated>
        <q-toolbar>
            <div class="q-pa-md q-gutter-sm">
              <q-btn
              class="absolute-bottom-right"
              color="warning"
              round
              icon="group"
              @click="showDialog = true" />
          </div>
        </q-toolbar>
      </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { useQuasar } from 'quasar'
import postService from 'src/FuncoesJson/services'

const feeds = [{

  id: 1,
  nome: "Palhares",
  foto: "https://cdn.quasar.dev/img/boy-avatar.png",
  texto:"Quero ver você passar a minha pontuação"

}, {

  id: 2,
  nome: "Caio",
  foto:"https://cdn.quasar.dev/img/boy-avatar.png",
  texto:"ababababab"

}, {
id: 2,
  nome: "Joãozinho",
  foto:"https://cdn.quasar.dev/img/boy-avatar.png",
  texto:"ababababab"

},
]

const linksList = [
  {
    title: 'Tela de Login',
    caption: 'Login aqui',
    icon: 'school',
    link: '#/login'

  },

  {
    title: 'Configurações',
    caption: 'Mudanças de tela e de conta',
    icon: 'more_horiz',
    link: 'http://localhost:8080/#/config'

  },

  {
    title: 'Tela principal',
    caption: 'Tela principal',
    icon: 'home',
    link: 'http://localhost:8080/#/'

  },

]

export default defineComponent({
  name: 'MainLayout',

  data() {
    return {
      usuario: {
        nome: ''
        },
      teste: '',
        showDialog: false,
      }
  },

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)
    const { list } = postService();


    const $q = useQuasar()

    function show (grid) {
      $q.bottomSheet({
        message: 'Bottom Sheet message',
        grid,
        actions: [
          {
            label: 'John',
            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
            id: 'john'
          }
        ]
      }).onOk(action => {
        // console.log('Action chosen:', action.id)
      }).onCancel(() => {
        // console.log('Dismissed')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }

    return {
      show,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      },
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

  // methods: {
  //    carregaDados: function() {

  //     }
  // },


})
</script>

<style lang="scss">

  .fotinha1{

    font-size:70px;
    margin-right: 40px;

  }

  .nomezinho{

    font-size: 23px;
    margin-right: 600px;
    margin-bottom: 0px;
    font-family: redondinho;

  }


  .menus{

    margin-left: 5%px;

  }

  .book{

    font-family: redondinho;

  }

  .menu{

    font-family: titulinho2;

  }

  .topic{

    font-family: titulinho2;

  }

  .amibo{

    font-family: titulinho1;

  }

  .vindo{

    font-family: titulinho1;
    font-size: 13px;

  }
</style>
