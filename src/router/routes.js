
const routes = [
  // {
  //   path: '/',
  //   component: () => ('pages/LoginPage.vue'),
  // },

  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/login', component: () => import('pages/LoginPage.vue') },
      { path: '/cad', component: () => import('pages/CadastroPage.vue')},
      { path: '/perfil', component: () => import('pages/PerfilPage.vue')},
      { path: '/config', component: () => import('pages/ConfigPage.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
