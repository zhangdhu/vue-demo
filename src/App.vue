<template>
    <div>
        <nav class="navbar navbar-default" role="navigation">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">首页</a>
                </div>
                <div class="collapse navbar-collapse navbar-ex1-collapse">
                    <ul class="nav navbar-nav">
                        <li class=""> <router-link to="/first">泡泡</router-link></li>
                        <li ><router-link to="/second">头条</router-link></li>
                    </ul>
                    
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#">{{msg}}</a></li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div>
        </nav>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div class="list-group">
                <router-link to="/foo" class="list-group-item">Go to Foo</router-link>
                <router-link to="/bar" class="list-group-item">Go to bar</router-link>
                <router-link to="/user/kiyon" class="list-group-item">Go to User</router-link>
                <router-link to="/user/kiyon/post/158" class="list-group-item">Go to post</router-link>
            </div>
        </div>
        <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
              <router-view class="view"></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: 'Hello Vue!!',
                total: 0
            }
        },
        methods: {}
    }
</script>

<style>
    body {
        font-family: Helvetica, sans-serif;
    }
</style>
