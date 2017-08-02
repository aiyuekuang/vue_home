//about.vue
<template>
    <div class='content'>
        <div class='title'>历史上的今天</div>
        <div class='content-item' v-for='item in data'>
            {{item.title}}
            <img class='item-img' :src='item.img'>
        </div>
    </div>
</template>
<script>
export default {
  name: 'today',
  mounted(){
        let that = this;
  },
  created(){
    //用vuex设置状态，改变class;
     this.$store.dispatch("inOther");
  },
  data () {
    return {
       apiUrl:"http://route.showapi.com/119-42",
       showapi_sign:"1688d17e4c41492daaef9e12d36dcd0d",
       showapi_appid:"35517",
       data:'',
    }
  },
}
</script>
