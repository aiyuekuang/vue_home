//index.vue
<template>
    <div class='home'>
        <Tit/>
        <Button type="info">信息按钮</Button>
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
  }
}
</script>