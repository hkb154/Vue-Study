<template>
  <div>
    <input @keyup.enter="searchWeather" v-model="cityName" placeholder="请输入需要查询的城市名">
    <!-- <el-button type="primary" round>主要按钮</el-button> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Search',
    data() {
        return {
            cityName:''
        }
    },
    methods:{
        searchWeather(){
            console.log(this.cityName);
            axios.get(`https://geoapi.qweather.com/v2/city/lookup?location=${this.cityName}&key=dfae1d17574a458f96df8058be32a945`).then(
                response => {
                    console.log(response.data);
                    this.$bus.$emit('getLocation', {isShow: false ,locationList: response.data.location, weatherData: null});
                    this.cityName = ''
                    // for(location of response.data.location){
                    //     axios.get(`https://api.qweather.com/v7/weather/now?location=${location.id}&key=dfae1d17574a458f96df8058be32a945`).then(
                    //         response => {
                    //             console.log(response.data.now);
                    //             this.$bus.$emit('getWeather', response.data.now);
                    //         },
                    //         error => {
                    //             console.log(error.message);
                    //         }
                    //     )
                    // }
                },
                error => {
                    console.log(error.message);
                }
            )
        }
    }
}
</script>

<style>

</style>