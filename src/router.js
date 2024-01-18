import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './views/HomePage.vue';
import UsersPage from './views/UsersPage.vue';
import UsersProfile from './views/UsersProfile.vue';
import UsersPost from './views/UsersPost.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component:  HomePage,
    },
    {
      path: '/users/:id',
      component:  UsersPage,
      props: true,
      children: [
        {
          path: 'profile',
          name: 'user-id-profile',
          component: UsersProfile
        },
        {
          path: 'posts',
          component: UsersPost
        }
      ]
    },
    {
      path: '/hello',
      redirect: '/'
    },
  ]
})
