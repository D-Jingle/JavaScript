<template>
    <div class="box">
        <!--<h1>音乐</h1>-->
        <ul>
            <li v-for="(item,index) in dataList" :key="index+'ml'" @click="routerPush('/musicDetail')">
                <img :src="item.bg" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
    // Vue.component('aplayer', VueAPlayer);
    import axios from 'axios';
    export default {
        name: "Music",
        data(){
            return {
                title: '音乐',
                cla: 'music',
                dataList:[],
            }
        },
        created(){
            this.$emit('changeTitle',this.title,this.cla);
            console.log(this.title);
            this.getData();
        },
        methods:{
            getData(){
                axios.get('./data/musiclist.json')
                .then((res)=>{
                    console.log(res);
                    this.dataList = res.data.albums;

                })
                .catch(()=>{

                })
            },
            routerPush(router){
                this.$router.push(router);
            },


        }
    }
</script>

<style scoped>
/*.box{*/
    /*padding-top: 60px;*/
/*}*/
ul li{
    /*display: inline;*/
    width: 50%;
    float: left;
}
li img{
    width: 100%;
}

</style>