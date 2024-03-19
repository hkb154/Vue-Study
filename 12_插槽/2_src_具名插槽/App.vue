<template>
  <div class="container">
    <Category title="美食" :category="foods">
      <img slot="center" src="http://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="food">
      <a style="display: block; text-align: center" slot="footer" href="http://www.baidu.com">美食推荐</a>
    </Category>

    <Category title="游戏" :category="games">
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">{{g}}</li>
      </ul>
      <div slot="footer" class="foot">
        <a href="http://www.baidu.com">单机游戏</a>
        <a href="http://www.baidu.com">网络游戏</a>
      </div>
    </Category>

    <Category title="电影" :category="films">
      <video slot="center" controls src="./assets/video/SoundScape.mp4"></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="http://www.baidu.com">热门</a>
          <a href="http://www.baidu.com">推荐</a>
          <a href="http://www.baidu.com">排行</a>
        </div>
        <h4>欢迎来到小焦影院！</h4>
      </template>
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
.container, .foot{
  display: flex;
  justify-content: space-around;
}

video{
  margin-top: 10px;
  width: 100%;
}

h4{
  text-align: center;
}
</style>