import Vue from 'vue';
// 定义组件, 也可以像教程之前教的方法从别的文件引入
import firstComponent from '../../components/firstComponent.vue';
import secondComponent from '../../components/secondComponent.vue';

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo = {template: '<div>foo</div>'};
const Bar = {template: '<div>bar</div>'};
const User = {
    template: '<div>User {{ $route.params.id }}</div>',
    watch: {
        '$route' (to, from) {
            // 对路由变化作出响应...
            console.log(to,from);
        }
    }
};

// 创建一个路由器实例
// 并且配置路由规则
const routers = [
        {path: '/first', component: firstComponent},
        {path: '/second', component: secondComponent},
        {path: '/foo', component: Foo},
        {path: '/bar', component: Bar},

        // 动态路径参数 以冒号开头
        {path: '/user/:id', component: User},
        {path: '/user/:username/post/:post_id', component: User}
];


export default routers;