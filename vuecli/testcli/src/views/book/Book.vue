<template>
    <div class="box">
        <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe>
    </div>
</template>


<script>
    require('vue-swipe/dist/vue-swipe.css');
    import { Swipe, SwipeItem } from 'vue-swipe';
    export default {
        components:{
            'swipe': Swipe,
            'swipe-item': SwipeItem
        },
        name: "Book",
        data(){
            return {
                title: '书籍',
                cla:'book'
            }
        },
        created(){
            this.$emit('changeTitle',this.title,this.cla);
            console.log(this.title);
            console.log(this.book);
        },
        methods:{

        }
    }
</script>

<style scoped>
    .my-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }

    .slide1 {
        background: url('../../../public/img/111.jpg') no-repeat center/cover;
        color: #fff;
    }

    .slide2 {
        background: url('../../../public/img/222.jpg') no-repeat center/cover;
        color: #000;
    }

    .slide3 {
        background: url('../../../public/img/333.jpg') no-repeat center/cover;
        color: #fff;
    }

</style>