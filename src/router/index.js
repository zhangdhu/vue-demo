import Vue from 'vue';
import routers from './routers';
import VueRouter from "vue-router";

Vue.use(VueRouter);
// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: routers
});

export default router;