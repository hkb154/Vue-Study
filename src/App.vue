<template>
  <div>
    <Search></Search>
    <WeatherList></WeatherList>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import WeatherList from "./components/WeatherList.vue";
export default {
  name: "App",
  components: { Search, WeatherList },
};
</script>

<style>
</style>