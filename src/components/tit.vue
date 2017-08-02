//about.vue
<template>
    <div class='tit'>
        {{tit}}
    </div>
</template>
<script>
    export default {
        name: 'tit',
        mounted(){

        },
        created(){
            //用vuex设置状态，改变class;
            this.$store.dispatch("inOther");
        },
        data () {
            return {
                tit:'我是标题',
            }
        },
    }
</script>
