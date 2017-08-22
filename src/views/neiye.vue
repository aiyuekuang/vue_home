//about.vue
<template>
    <div class='neiye'>
        <div class="neiye_tit">
            {{tishi}}
        </div>
        <div class='neiye_li' v-for='item in this.$store.state.list'>
            <div>
                <div><img :src="item.appthumb" alt=""/></div>
                <div>{{item.title}}</div>
                <div>{{item.pubdate}}</div>
                <div>浏览量：{{item.play}}</div>
            </div>

        </div>
    </div>
</template>
<script>
import {postData,getData} from '../utils/fetchData';

    export default {
  name: 'neiye',
  mounted(){
        let that = this;
  },
  created(){
    //用vuex设置状态，改变class;
      let that = this;

      //这里是用得跨域请求获取得数据
      let zhi = getData('/list',{r:'0.7153214477881407'});
      zhi.then(function(json) {
          console.log(json)
          that.$store.dispatch("list",json.data.msg.newlist);
          return json;
      })

  },
  data () {
    return {
        tishi:'从主页来的吧，哈哈，点击浏览器的回退回去吧(下面是从线上拉取得数据，更新store)',
    }
  },
}
</script>
