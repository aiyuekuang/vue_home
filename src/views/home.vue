//index.vue
<template>
    <div class='home'>
        <Tit/>
        {{hah}}
        <Tooltip content="没错，我就是vue-router的实例了">
            <Button type="info" v-on:click="dianji">点我跳转</Button>
        </Tooltip>
        <div class="less_demo">
            我是less得示例
        </div>
    </div>
</template>
<script>
    import Tit from '../components/tit.vue';
    import {str_cut} from 'esn';

    export default {
        name: 'home',
        components: {
            Tit
        },
        created(){

        },
        methods: {
            dianji: function (event) {
                // `this` 在方法里指当前 Vue 实例
                this.$router.push('neiye');
            }
        },
        data ()
        {
            return {
                hah: str_cut('还是大家还是觉得好就是当今世界的技术的',6)
            }
        }
    }
</script>