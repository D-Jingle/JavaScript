<template>
    <div class="box">
        <h1>
            picture
        </h1>
    </div>
</template>

<script>
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

        }
    }
</script>

<style scoped>

</style>