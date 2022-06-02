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
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          BookOn
        </q-toolbar-title>

        <div>Seja bem vindo Carlos

        <a href="http://localhost:8080/#/perfil">

          <q-avatar>

            <img src="https://cdn.quasar.dev/img/boy-avatar.png"/>

          </q-avatar>

        </a>

        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menu
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-dialog
      v-model="showDialog" >
      <q-card>

        <q-toolbar class="bg-primary text-white">

          <q-toolbar-title>
            amigos
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

            <q-item v-for="feed in feeds" :key="feed.id" clickable >

            <q-item-section>
              <q-avatar class="fotinha1">
                  <img :src="feed.foto">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <p class="nomezinho"><b> {{feed.nome}} </b></p>
              <p class="bg-cyan-1"><b> Descrição: </b>{{feed.texto}}</p>

            </q-item-section>

            <q-item-section>

              <a href="http://localhost:8080/#/chat" class="text-green">
                <q-btn
                class="bg-green text-white"
                icon="chat"
                rounded
                flat />
              </a>

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
  nome: "Pailhares",
  foto: "https://cdn.quasar.dev/img/boy-avatar.png",
  texto:"Quero ver você passar a minha pontuação"

}, {

  id: 2,
  nome: "Caio",
  foto:"https://cdn.quasar.dev/img/boy-avatar.png",
  texto:"ababababab"

},



]

const linksList = [
  {
    title: 'Login',
    caption: 'Book.Login',
    icon: 'school',
    link: '#/login'

  },

  {
    title: 'Configurações',
    caption: 'Book.Config',
    icon: 'more_horiz',
    link: 'http://localhost:8080/#/config'

  },

  {
    title: 'Home',
    caption: 'Book.home',
    icon: 'home',
    link: 'http://localhost:8080/#/'

  },

  {
    title: 'Chat',
    caption: 'Book.chat',
    icon: 'chat',
    link: 'http://localhost:8080/#/chat'

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

    font-size:100px;

  }

  .nomezinho{

    font-size: 25px;

  }

</style>
