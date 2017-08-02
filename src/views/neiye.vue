//about.vue
<template>
    <div class='neiye'>
        <div class="neiye_tit">
            {{tishi}}
        </div>
        <div class='neiye_li' v-for='item in data'>
            <div>{{item}}</div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'neiye',
  mounted(){
        let that = this;
  },
  created(){
    //用vuex设置状态，改变class;
     this.$store.dispatch("inOther");
  },
  data () {
    return {
        tishi:'从主页来的吧，哈哈，点击浏览器的回退回去吧',
       data:['哈哈','哈哈2','哈哈3','哈哈4','哈哈5','哈哈6'],
    }
  },
}
</script>
