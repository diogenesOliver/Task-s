import { createRouter,  } from 'vue-router'

import HomeView from '../views/SignInView.vue'
import AboutView from '../views/SignUpView.vue'

const router = createRouter({
    routes: [
        {
            path: '/sign-in',
            name: 'signIn',
            component: HomeView
        },
        {
            path: '/login',
            name: 'login',
            component: AboutView
        }
    ]
})

export default router   