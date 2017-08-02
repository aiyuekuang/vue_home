//index.vue
<template>
    <div class='home'>
        <Tit/>
        <Tooltip content="没错，我就是vue-router的实例了">
            <Button type="info"  v-on:click="dianji">点我跳转</Button>
        </Tooltip>
    </div>
</template>
<script>
import Tit from '../components/tit.vue';
export default {
  name: 'home',
  components:{
      Tit
  },
  created(){
    //用vuex设置状态，改变class;
  },
    methods: {
        dianji: function (event) {
            // `this` 在方法里指当前 Vue 实例
            this.$router.push('today');
        }
    }
}
</script>