import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Dashboard from '../components/Dashboard.vue';
import Configuracoes from '../components/Configuracoes.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/dashboard',
		name: 'dashboard',
		component: Dashboard,
		meta: { requiresAuth: true },
	},
	{
		path: '/configuracoes',
		name: 'configuracoes',
		component: Configuracoes,
		meta: { requiresAuth: true },
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		const token = localStorage.getItem('access_token');

		if (!token) {
			alert('Você não está autenticado!');
			setTimeout(() => {
				next({ name: 'home' });
			}, 2000);
		} else {
			next();
		}
	} else {
		next();
	}
});

export default router;
