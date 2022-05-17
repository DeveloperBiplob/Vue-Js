import ComHome from './components/Home.vue'
import ComCustomer from './components/Customer/Customer.vue'

// Nested Route
import CustomerStart from './components/Customer/CusmoterStart.vue'
import CustomerDetails from './components/Customer/CustomerDetails.vue'
import CustomerEdit from './components/Customer/CustomerEdit.vue'

export const routes = [
    {
        path: '/',
        component: ComHome,

        // Route name use
        name: 'home'
    },
    {
        // path: '/customer/:id',
        // component: ComCustomer,

        // Vue Nested Route.....//
        path: '/customer',
        component: ComCustomer,
        children: [
            {
                path: '/',
                component: CustomerStart
            },
            {
                path: ':id',
                component: CustomerDetails
            },
            {
                path: ':id/edit',
                component: CustomerEdit,
                
                // Route Name deifne.
                name: 'customerEdit'
            }
        ]
        
    }
]