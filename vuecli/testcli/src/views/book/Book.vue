<template>
    <div class="box">
        <h1>book</h1>
    </div>
</template>

<script>
    export default {
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

</style>