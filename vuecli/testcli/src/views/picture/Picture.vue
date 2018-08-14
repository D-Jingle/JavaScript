<template>
    <div class="box">

        <!--<v-touch v-on:swipeleft="onSwipeLeft">Swipe me!</v-touch>-->
    </div>
</template>

<script>
    // import Vue from 'vue'
    // import VueTouch from 'vue-touch'
    // Vue.use(VueTouch, {name: 'v-touch'});
    export default {
        name: "Picture",
        data(){
            return {
                title: '图片',
                cla:'picture'
            }
        },
        created(){
            this.$emit('changeTitle',this.title,this.cla);
            console.log(this.title);
        },
        methods:{
            // onSwipeLeft(){
            //     console.log('aaa');
            // }
        }
    }
</script>

<style scoped>

</style>