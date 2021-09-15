<template>
  <div id="vue-hotel-search">    
    <HotelSearch/>
  </div>
</template>

<script>
import HotelSearch from './components/HotelSearch.vue'

export default {
  name: 'App',
  components: {
    HotelSearch
  }
}
</script>

<style>
#vue-hotel-search {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
}
</style>
