import Vue from 'vue';
import App from './App.vue';

import VueResource from 'vue-resource';
import router from './router';
//开启debug模式
Vue.config.debug = true;
Vue.use(VueResource);

/**
 el: 指令所绑定的元素，可以用来直接操作 DOM 。
 binding: 一个对象，包含以下属性：
 name: 指令名，不包括 v- 前缀。
 value: 指令的绑定值， 例如： v-my-directive="1 + 1", value 的值是 2。
 oldValue: 指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
 expression: 绑定值的字符串形式。 例如 v-my-directive="1 + 1" ， expression 的值是 "1 + 1"。
 arg: 传给指令的参数。例如 v-my-directive:foo， arg 的值是 "foo"。
 modifiers: 一个包含修饰符的对象。 例如： v-my-directive.foo.bar, 修饰符对象 modifiers 的值是 { foo: true, bar: true }。
 vnode: Vue 编译生成的虚拟节点，查阅 VNode API 了解更多详情。
 oldVnode: 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
 */
// 注册一个全局自定义指令 v-focus
Vue.directive('focus', {
    // 当绑定元素插入到 DOM 中。
    inserted: function (el) {
        // 聚焦元素
        el.focus();
    }
});

Vue.directive('demo', {
    bind: function (el, binding, vnode) {
        var s = JSON.stringify;
        el.innerHTML =
            'name: ' + s(binding.name) + '<br>' +
            'value: ' + s(binding.value) + '<br>' +
            'expression: ' + s(binding.expression) + '<br>' +
            'argument: ' + s(binding.arg) + '<br>' +
            'modifiers: ' + s(binding.modifiers) + '<br>' +
            'vnode keys: ' + Object.keys(vnode).join(', ');
    }
});

Vue.mixin = {
    created: function () {
        var myOption = this.$options.myOption;
        if (myOption) {
            console.log(myOption);
        }
    }
};

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');




