<template>
  <div class="container">
    <Category title="美食" :category="foods">
      <img src="http://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="food">
    </Category>

    <Category title="游戏" :category="games">
      <ul>
        <li v-for="(g, index) in games" :key="index">{{g}}</li>
      </ul>
    </Category>

    <Category title="电影" :category="films">
      <video controls src="./assets/video/SoundScape.mp4"></video>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue'

export default {
  name:'App',
  components:{Category},
  data() {
    return {
      foods:['火锅', '冰淇淋', '螺蛳粉', '炸鸡汉堡'],
      games:['原神', '王者荣耀', '明日方舟', '星露谷物语'],
      films:['《叶问》', '《热辣滚烫》', '《夏洛特烦恼》', '《飞驰人生》']
    }
  },
}
</script>

<style>
.container{
  display: flex;
  justify-content: space-around;
}

video{
  margin-top: 10px;
  width: 100%;
}
</style>