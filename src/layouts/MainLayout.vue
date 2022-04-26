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
          <q-btn
            class="absolute-bottom-right"
            color="warning"
            round
            icon="group"
            @click="toggleRightDrawer"
          />
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

const linksList = [
  {
    title: 'Login',
    caption: 'Book.Login',
    icon: 'school',
    link: 'http://localhost:8080/#/login'

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

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
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
  }
})
</script>
