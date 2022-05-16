import ComHome from './components/Home.vue'
import ComCustomer from './components/Customer/Customer.vue'

export const routes = [
    {
        path: '/',
        component: ComHome
    },
    {
        path: '/customer/:id',
        component: ComCustomer
    }
]