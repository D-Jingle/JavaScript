<template>
  <div id="app">
      <div :class="active">
          <div id="header">
              <router-link to="/" class="index">首页</router-link>
              <h1>{{headTitle}}</h1>
          </div>
          <div id="footer">
              <router-link to="/" :class="{'nav-active':headTitle=='电影'}">电影</router-link>
              <router-link to="/music" :class="{'nav-active':headTitle=='音乐'}">音乐</router-link>
              <router-link to="/book" :class="{'nav-active':headTitle=='书籍'}">书籍</router-link>
              <router-link to="/picture" :class="{'nav-active':headTitle=='图片'}">图片</router-link>
          </div>
          <router-view @changeTitle="changeTitle"/>
      </div>
  </div>
</template>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.nav-active{
    color: #fff;
}
    #header,#footer{
        height: 60px;
        width: 100%;
        position: fixed;
    }
    #header{
        background-color: rgb(33, 150, 243);
    }
    #footer{
        background-color: rgb(0, 150, 136);
        top: 100%;
        margin-top: -60px;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 20px;
    }
    #footer a{
        width: 25%;
    }
    .box{
        padding: 60px 0;
    }
    .index{
        position: absolute;
        line-height: 60px;
        left: 30px;
        font-size: 20px;
    }
    .movie #header,.movie #footer{
        background-color: rgb(33, 150, 243);
     }
    .music #header,.music #footer{
         background-color: rgb(0, 150, 136);
    }
    .book #header,.book #footer{
         background-color: rgb(121, 85, 72);
    }
    .picture #header,.picture #footer{
         background-color: rgb(63, 81, 181);
    }

</style>

<script>
    export default {
        data(){
            return {
                headTitle : '电影',
                active : 'movie',
            }
        },
        methods:{
            changeTitle(title,cla){
                console.log(this.headTitle);
                this.headTitle = title;
                this.active = cla;
            }
        }
    }
</script>