import ComHome from './components/Home.vue'
import ComCustomer from './components/Customer/Customer.vue'

// Nested Route
import CustomerStart from './components/Customer/CusmoterStart.vue'
import CustomerDetails from './components/Customer/CustomerDetails.vue'
import CustomerEdit from './components/Customer/CustomerEdit.vue'
import ErrorPage from './components/404.vue'

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
        
    },

    // Redirect path
    // vul kono route e his korle home e redirect korbe. 
    // {
    //     path: '*',
    //     component: ComHome
    // },

    // amara chile akta 404 page create kore oi khane redirect korte pari.
    {
        path: '*',
        component: ErrorPage
    }
]