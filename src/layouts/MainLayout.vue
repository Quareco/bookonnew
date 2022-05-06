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

            <img src="https://cdn.quasar.dev/img/avatar.png"/>

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

    <q-drawer
      side="right"
      v-model="rightDrawerOpen"
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Amigos
        </q-item-label>

      </q-list>
    </q-drawer>

      <q-footer elevated>
        <q-toolbar>
            <div class="q-pa-md q-gutter-sm">
              <q-btn
              class="absolute-bottom-right"
              color="warning"
              round
              icon="group"
              @click="show()" />
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
]

export default defineComponent({
  name: 'MainLayout',

  data() {
    return {
      usuario: {
        nome: ''
        },
      teste: '',
      }
  },

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

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
      }
    }

  },

   mounted () {
    this.$axios.get('http://localhost:3000/usuario')
      .then((res) => {
        const dataNome = res.data[0].nome
        console.log('ta indo', dataNome)
        this.teste = dataNome
      })
  },

  // methods: {
  //    carregaDados: function() {

  //     }
  // },


})
</script>
