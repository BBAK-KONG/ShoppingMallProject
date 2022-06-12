<template>
  <div>
    <div id="wrap">
      <HeaderPart/>
      <router-view></router-view>
      <button>
        <a href="#" class="top-btn" >
          <img src="@/assets/header-image/topButton.png" width="50">
        </a>
      </button>
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

.top-btn {
  position: fixed;
  bottom: 10%;
  right: 2%;
  height: 60px;
  width: 60px;
}
</style>
 