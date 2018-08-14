import Vue from 'vue'
import Router from 'vue-router'
import Movie from './views/movie/Movie.vue' //2
import Music from './views/music/Music.vue' //2
import Book from './views/book/Book.vue'
import Picture from './views/picture/Picture.vue'
import movieDetail from './views/movieDetail/movieDetail.vue'
import musicDetail from './views/musicDetail/musicDetail.vue'
import pictureDetail from './views/pictureDetail/PictureDetail.vue'

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        name: 'movie',
        component: Movie
    },
    {
        path: '/music',
        name: 'music', //3
        component: Music,
    },
      {
          path:'/book',
          name:'book',
          component: Book
      } ,
      {
          path:'/picture',
          name:'picture',
          component: Picture
      },
      {
          path:'/movieDetail',
          name:'movieDetail',
          component: movieDetail
      },
      {
          path:'/musicDetail',
          name:'musicdetail',
          component: musicDetail
      },
      {
          path:'/pictureDetail',
          name:'picturedetail',
          component:pictureDetail
      }
  ]
})
