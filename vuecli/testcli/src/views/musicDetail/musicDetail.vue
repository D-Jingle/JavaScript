<template>
    <div class="box">
        <!--<h1>musicDetail</h1>-->
            <aplayer v-if="isif"
                :music="dataList[0]"
                :list="dataList"
            >
        </aplayer>
    </div>
</template>


<script>
    import Aplayer from 'vue-aplayer';
    import axios from 'axios';
    // Vue.component('aplayer', VueAPlayer);
    export default {
        name: "musicDetail",
        data(){
            return{
                isif:false,
                dataList:[]
            }
        },
        components: {
            Aplayer
        },
        created(){
            this.getData();
        },
        methods:{
            getData(){
                axios.get('./data/musicdata.json')
                .then((res)=>{
                    console.log(res);
                    this.dataList = res.data.musicData;
                    this.isif = true;
                    for(var i=0; i<res.data.musicData.length; i++){
                        this.dataList[i].lrc = location.origin + '/' + res.data.musicData[i].lrc;
                    }
                    console.log(this.dataList);
                })
                .catch(()=>{
                    // console.log('aaa');
                })
            },
        }
    }
</script>


<style scoped>

</style>