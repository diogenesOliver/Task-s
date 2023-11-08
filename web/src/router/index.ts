import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/SignInView.vue'
import AboutView from '../views/SignUpView.vue'
import HomePageView from '../views/HomePageView.vue'
import TaskPageView from '../views/TaskPageView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'homePage',
			component: HomePageView
		},
		{
			path: '/sign-in',
			name: 'home',
			component: HomeView
		},
		{
			path: '/login',
			name: 'about',
			component: AboutView
		},
		{
			path: '/task-s/:name/:id',
			name: 'tasks',
			component: TaskPageView
		}
	]
})

export default router
