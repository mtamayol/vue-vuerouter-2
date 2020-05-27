import Vue from 'vue'
import VueRouter from 'vue-router'

import Articulo from '../views/Articulo.vue'
import NotFound from '../views/NotFound.vue'
import Administrador from '../views/Administrador.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        redirect: {name:'inicio'}
    },
    {
        path: '/inicio',
        redirect: { name: 'inicio' }
    },
    {
        path: '/portada',
        redirect: { name: 'inicio' }
    },
      {
        path: '/',
        name: 'inicio',
        component: () => import('../views/Inicio.vue')
    },
    {
        path: '/sobremi',
        name: 'sobremi',
        alias: '/acerca',
        component: () => import('../views/SobreMi.vue')
        
    },
    {
        path: '/contacto',
        name: 'Contacto',
        alias: '/contactarme',
        component: () => import('../views/Contacto.vue')
    },
    {
        path: '/post',
        name: 'Post',
        component: () => import('../views/Post.vue'),
        children: [
            {
                path: ':articulo',
                component: Articulo,
                name: 'Articulo'
            }
        ]
    },
    {
        path: '/administrador/:adm',
        name: 'Administrador',
        component: Administrador,
        props: true
    },
      {
          path: '*',
          component: NotFound
      }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
