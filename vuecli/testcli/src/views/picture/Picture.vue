<template>
    <div class="box">
        <ul>
            <li v-for="(items,id) in imgList" :key="id" @click="change(items)">
                <img :src="items.img" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
    export default {
        name: "Picture",
        data(){
            return {
                title: '图片',
                cla:'picture',
                imgList:[
                    {
                        id:0,
                        img:"./img/aaa.jpg",
                    },
                    {
                        id:1,
                        img:"./img/bbb.jpg",
                    },
                    {
                        id:2,
                        img:"./img/eee.jpg",
                    },
                    {
                        id:3,
                        img:"./img/fff.jpg",
                    },
                    {
                        id:4,
                        img:"./img/ggg.jpg",
                    },
                    {
                        id:5,
                        img:"./img/hhh.jpg",
                    },
                    {
                        id:6,
                        img:"./img/iii.jpg",
                    },
                    {
                        id:7,
                        img:"./img/jjj.jpg",
                    }

                ]
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
            change(item){
                var that = this;
                this.$router.push('/pictureDetail');
                this.$store.commit('changeImgAdd',item);
            },
            ...mapMutations(['changeImgAdd']),
        }
    }
</script>

<style scoped>
    ul li img{
        width: 50%;
        float: left;
    }
</style>