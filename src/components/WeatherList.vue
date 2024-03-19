<template>
  <div>
    <div v-for="location in locationInfo.locationList" :key="location.id" class="card">
      <p>地区: {{ location.name }}</p>
      <button @click="getWeather(location.id)">查看天气</button>
      <div v-show="location.isShow">
        <p>温度: {{ location.weatherData.temp }}</p>
        <p>天气状况: {{ location.weatherData.text }}</p>
        <p>白天或黑夜: {{ 白天 }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "WeatherList",
  data() {
    return {
      locationInfo:{
        isShow: false,
        locationList: [],
        weatherData: null,
      },
      
      
      
    };
  },
  methods: {
    getLocation(infoObj) {
      // this.locationList = locations;
      this.locationInfo = {...this.locationInfo, ...infoObj};
    },
    getWeather(id) {
      axios
        .get(
          `https://devapi.qweather.com/v7/weather/now?location=${id}&key=dfae1d17574a458f96df8058be32a945`
        )
        .then(
          (response) => {
            // console.log(response.data.now);
            // this.$bus.$emit("getWeather", response.data.now);
            console.log(response.data);
            this.locationInfo.weatherData = response.data.now;
            this.locationInfo.isShow = true;
            // return response.data
          },
          (error) => {
            console.log(error.message);
          }
        );
      // this.weatherList.push(weather);
    },
  },
  mounted() {
    this.$bus.$on("getLocation", this.getLocation);
    // this.$bus.$on("getWeather", this.getWeather);
  },
  beforeDestroy() {
    this.$bus.$off("getLocation");
    // this.$bus.$off("getWeather");
  },
};
</script>

<style scoped>
.card {
  width: 800px;
  height: 200px;
  margin-top: 10px;
  background-color: beige;
  border-radius: 20px;
}
</style>