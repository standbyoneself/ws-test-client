import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
} from 'vue-router';
import routes from '@/router/routes';
import store from '@/store';

const router = createRouter({ history: createWebHistory(), routes });

router.beforeEach(
  async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    await store.dispatch('checkAuth');

    next();
  }
);

export default router;
