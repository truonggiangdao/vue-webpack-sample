/**
 * Defines all main routes in app
 *
 * @author: Giang Dao
 * @exports: Vue Router Object
 */
import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/components/landing/Landing';
import ComListerRouteView from '@/components/comLister/ComListerRouteView';
import ComListerRoutes from '@/components/comLister/comLister.routes';

Vue.use(Router);

export default new Router({
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Landing,
    },
    {
      path: '/components-list',
      // name: 'components',
      component: ComListerRouteView,
      children: ComListerRoutes,
    },
  ],
});
