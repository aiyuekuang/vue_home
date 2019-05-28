<template>
    <div>
        <div class="zi">我是主页，我是vuex里的值</div>{{ count }}
        <p>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </p>

        <div v-for="(item,i) in list.songlist" :key="i">
            {{item.title}}--{{item.artist}}
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Buttons></Buttons>
    </div>
</template>

<script>
    import {list} from "@server";
    import Buttons from "@components/button/index.vue"
    export default {
        name: "index",
        data() {
            return {
                list: []
            }
        },
        created() {
            list( (data)=>{
                console.log(data)
                this.list = data.result
            });
        },
        methods: {
            increment() {
                this.$store.commit('increment')
            },
            decrement() {
                this.$store.commit('decrement')
            }
        },
        computed: {
            count() {
                return this.$store.state.count
            },
        },
        components:{
            Buttons
        }
    }
</script>

<style scoped>

</style>
