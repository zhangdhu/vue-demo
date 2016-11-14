<template>
    


    <div id="firstComponent">

        <button v-on:click="increment" v-focus>{{ counter }}</button>
        <p></p>
        <slot></slot>
        </p>
        <br>
        <p>{{ getMessage }}</p>
        <br>
        <p>{{ propD }}</p>
        <br>
        <div v-demo:hello.a.b="counter"></div>
    </div>
</template>
<script type="text/javascript">

    var mixin = {
        created: function () {
            console.log('mixin hook called')
        }
    };

    export default {
        data: function () {
            return {counter: 0}
        },
        // 声明 props
        // 就像 data 一样，prop 可以用在模板内
        // 同样也可以在 vm 实例中像 “this.message” 这样使用
        props: {
            // 基础类型检测 （`null` 意思是任何类型都可以）
            propA: Number,
            // 多种类型
            propB: [String, Number],
            // 必须且是字符串
            propC: {
                type: String,
                required: false
            },
            // 数字，有默认值
            propD: {
                type: Number,
                default: 100
            },
            // 数组／对象的默认值应当由一个工厂函数返回
            propE: {
                type: Object,
                default: function () {
                    return {message: 'hello'}
                }
            },
            // 自定义验证函数
            propF: {
                validator: function (value) {
                    return value > 10
                }
            },
            message: {}
        },
        computed: {
            getMessage: function () {
                return this.message + " from computed";
            }
        },
        methods: {
            increment: function () {
                this.counter += 1;
                this.$emit('increment');
            }
        },
        mixins: [mixin],
        myOption: 'hello!'
    }
</script>
<style>

</style>