import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import Login from './pages/Login/Login.vue'
import Register from './pages/Register/Register.vue';

Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter);

const routes = [
    {path:"/pages/login",component:Login},
    {path:"/pages/register",component:Register},
    {path:"/",component:Home}
];

let router = new VueRouter({
    routes,
    mode:'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
