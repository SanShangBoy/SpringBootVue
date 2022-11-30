import { createRouter, createWebHistory } from 'vue-router'
import Login from '/src/components/Login'
import Home from '/src/components/Home'
import Error from '/src/components/Error'
//路由数组
const routes = [
    {
        name:"Login",
        path: "/login",
        component:Login
    },
    {
        name:"Home",
        path: "/home",
        component:Home
    },
    {
        name:"Error",
        path: "/error",
        component:Error
    },
]

//路由对象
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes:routes //上面的路由数组
})
//导出路由对象，在main.js中引用
export default router