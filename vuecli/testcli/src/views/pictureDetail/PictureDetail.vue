<template>
    <div class="box">
        <v-touch @swipeleft="onSwipeLeft" @swiperight="onSwipeRight">
            <transition-group name="img">
                <img v-for="(item,index) in imgList" :src="item.img" alt="" :key="index" v-show="item.id == curId" >
            </transition-group>
        </v-touch>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueTouch from 'vue-touch'
    Vue.use(VueTouch, {name: 'v-touch'});
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
    export default {
        name: "PictureDetail",
        data(){
            return {
                curId: 0,
            }
        },
        computed:{
            ...mapState(['imgList','imgItem']),
        },
        methods:{
            onSwipeLeft(){
                if(this.curId < this.imgList.length-1){
                    this.curId++;
                    console.log(this.curId);
                }
            },
            onSwipeRight(){
                if(this.curId > 0){
                    this.curId--;
                    console.log(this.curId);
                }
            },
            chushi(){
                this.curId = this.imgItem.id;
                console.log(this.curId);
            }
        },
        created() {
            this.chushi();
        }
    }
</script>

<style scoped>
.box{
    background-color: black;
    display: flex;
    position: fixed;
    top: 60px;
    bottom: 60px;
    left: 0;
    right: 0;
    align-items: center;
}
.img-move{
    transition: transform 1s;
}
.img-enter{
    position: absolute;
    top: -60px;
    left: 100%;
}
.img-leave-to{
    position: absolute;
    top: 0px;
    left: 100%;
}
.img-enter-active{
    transition: all 1s ease;
}
.img-leave-active{
    transition: all 1s ease;
}

</style>