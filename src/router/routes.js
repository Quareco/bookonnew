
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
      { path: '/config', component: () => import('pages/ConfigPage.vue')},
      { path: '/perfilConfig', component: () => import('pages/PerfilEditar.vue')},
      { path: '/tema', component: () => import('pages/tema.vue')},
      { path: '/sobre', component: () => import('pages/sobre.vue')},
      { path: '/desativar', component: () => import('pages/desativar.vue')},
      { path: '/deletar', component: () => import('pages/deletar.vue')},
      { path: '/senha', component: () => import('pages/mudar_senha1.vue')},
      { path: '/mudar_senha', component: () => import('pages/mudar_senha2.vue')},
      { path: '/atualizar', component: () => import('pages/atualizar.vue')},
      { path: '/portugues', component: () => import('pages/materiaPt')}


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
