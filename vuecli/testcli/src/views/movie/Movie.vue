<template>
    <div class="box" v-on:onscroll.passive="isBottom" >
        <ul>
            <li v-for="(items,index) in dataList" :key="index+'dl'" class="li" @click="$router.push({ name: 'moviedetail', params: { Id: items.id }})">
                <div class="left">
                    <img :src="items.images.small" alt="" class="img">
                </div>
                <div class="right">
                    <div class="title">{{items.title}}</div>
                    <div class="rating">评分：{{items.rating.average}}</div>
                    <div class="year">年份{{items.year}}</div>
                </div>
            </li>
        </ul>
        <div class="loading">
            <div class="loai-content">
                <img src="" alt="">
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: "Movie",
        data(){
            return {
                title: '电影',
                cla: 'movie',
                dataList: [],
                isFinish: true,
                page: 0
            }
        },
        created(){
            this.$emit('changeTitle',this.title,this.cla);
            console.log(this.title);
            this.getData();
            // window.onscroll = this.isBottom();
            window.addEventListener('scroll',this.isBottom);
        },
        methods:{
            getData(){
                axios.get(API_PROXY+'https://api.douban.com/v2/movie/in_theaters?start=' + this.page + '&count=5')
                    .then((response) =>{
                        console.log(response);
                        this.dataList = response.data.subjects
                    })
                    .catch((error) =>{
                        console.log(error);
                    })
            },
            isBottom(){
                let scrollTop = document.documentElement.scrollTop;
                let scrollHeigth = document.documentElement.scrollHeight;
                let clientHeight = document.documentElement.clientHeight;
                // console.log(scrollTop,scrollHeigth,clientHeight);
                if(scrollTop+clientHeight == scrollHeigth){
                    if (this.isFinish){
                        this.isFinish = false;
                        this.page += 5;
                        axios.get(API_PROXY+'https://api.douban.com/v2/movie/in_theaters?start=' + this.page + '&count=5')
                            .then((response) =>{
                                console.log(response);
                                this.dataList = this.dataList.concat(response.data.subjects);
                                console.log(this.dataList);
                                this.isFinish = true;
                            })
                            .catch((error) =>{
                                console.log(error);
                            })
                    }

                }
            },
        }

    }
</script>

<style scoped>
    .li{
        display: flex;
        flex-direction: row;
    }
    .right{
        display: flex;
        flex-direction: column;
    }
    .box{
        padding-top: 60px;
    }
    .img{
        width: 120px;
    }
    .title{

    }
</style>