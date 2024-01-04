import { createRouter, createWebHistory } from 'vue-router'

import SignInViewVue from '@/views/SignInView.vue'
import SignUpViewVue from '@/views/SignUpView.vue'
import HomePageViewVue from '@/views/HomePageView.vue'
import TaskPageViewVue from '@/views/TaskPageView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'homePage',
			component: HomePageViewVue
		},
		{
			path: '/sign-in',
			name: 'home',
			component: SignInViewVue
		},
		{
			path: '/login',
			name: 'about',
			component: SignUpViewVue
		},
		{
			path: '/task-s/:name/:id',
			name: 'tasks',
			component: TaskPageViewVue
		}
	]
})

export default router
