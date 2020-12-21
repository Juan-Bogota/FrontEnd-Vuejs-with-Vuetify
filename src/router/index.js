import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home,
    meta: {
      public: true
    }
  },
  {
    path: '/landing',
    name: 'Landing',
    component: () => import(/* webpackChunkName: "landing" */ '../views/Landing.vue'),
    meta: {
      public: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      public: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      public: true
    }

  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth.vue'),
    meta: {
      auth: true
    },
    children: [
      {
        path: 'home',
        name: 'AuthHome',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "AuthHome" */ '../views/AuthHome.vue'),
        meta: {
          auth: true,
          Administrador: true,
          Vendedor: true,
          Almacen: true
        }
      },
      {
        path: 'categoria',
        name: 'Categoria',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "categoria" */ '../views/Categoria.vue'),
        meta: {
          auth: true,
          Administrador: true,
          Vendedor: true,
          Almacen: true
        }
      },
      {
        path: 'articulo',
        name: 'Articulo',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "articulo" */ '../views/Articulo.vue'),
        meta: {
          auth: true,
          Administrador: true,
          Vendedor: true
        }
      },
      {
        path: 'usuario',
        name: 'Usuario',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "usuario" */ '../views/Usuario.vue'),
        meta: {
          auth: true,
          Administrador: true,

        }
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.public)) {
    next();
  } else if (to.matched.some(record => record.meta.auth)) {
    if (store.state.user && to.matched.some(record => record.meta.Administrador)) { //&& store.state.user.rol === 'Administrador'
      next();
    } else if (store.state.user && to.matched.some(record => record.meta.Vendedor)) {
      next();
    } else {
      next({name: 'AuthHome'});
    }
  } else {
    next();
  }
})


export default router
