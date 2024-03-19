<template>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>Vue App</title>
      <link rel="stylesheet" href="./css/bootstrap.css" />
    </head>
    <body>
      <div>
        <div class="row">
          <div class="col-xs-offset-2 col-xs-8">
            <Banner></Banner>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-2 col-xs-offset-2">
            <div class="list-group">
              <!-- <a class="list-group-item active" href="./about.html">About</a>
              <a class="list-group-item" href="./home.html">Home</a> -->
              <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
              <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
            </div>
          </div>
          <div class="col-xs-6">
            <div class="panel">
              <div class="panel-body">
                <router-view></router-view>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>
</template>

<script>
import Banner from './components/Banner.vue'
export default {
  name:'App',
  components:{Banner}
};
</script>

<style>
</style>