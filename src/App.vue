<template>
  <div>
    <div id="wrap">
      <HeaderPart/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderPart from './components/HeaderPart.vue';

export default {
  name: 'App',
  data(){  //데이터 보관함
    return {
    }
  },
  methods :{
  },
  components: {
    HeaderPart,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
 