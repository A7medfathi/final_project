import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import AboutView from '../views/AboutView.vue'
import PropertyListView from '../views/PropertyListView.vue'
import PropertyTypeView from '../views/PropertyTypeView.vue'
import PropertyAgentView from '../views/PropertyAgentView.vue'
import ContactView from '../views/ContactView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import SingleLocationView from '../views/SingleLocation.vue'
import ProfileView from '../views/ProfileView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ChangePasswordView from '../views/ChangePasswordView.vue'
const routes = [

  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/PropertyList',
    name: 'PropertyListView',
    component: PropertyListView
  },
  {
    path: '/PropertyType',
    name: 'PropertyTypeView',
    component: PropertyTypeView
  },
  {
    path: '/PropertyAgent',
    name: 'PropertyAgentView',
    component: PropertyAgentView
  },
  {
    path: '/Contact',
    name: 'ContactView',
    component: ContactView
  },
  {
    path: '/NotFound',
    name: 'NotFoundView',
    component: NotFoundView
  },
  {
    path: '/SingleLocation',
    name: 'SingleLocationView',
    component: SingleLocationView
  },
  {
    path: '/Profile',
    name: 'ProfileView',
    component: ProfileView
  },
  {
    path: '/Login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/Register',
    name: 'RegisterView',
    component: RegisterView
  },
  {
    path: '/ChangePassword',
    name: 'ChangePasswordView',
    component: ChangePasswordView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
