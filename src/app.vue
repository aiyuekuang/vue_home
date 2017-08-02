<!--App.vue是项目入口文件。-->
<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
import store from './vuex/store';
export default {
  name: 'app',
  store,
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  }
}
</script>