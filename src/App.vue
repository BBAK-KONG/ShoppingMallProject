<template>
<div>
  <div id="wrap">
        <div id="header">
          <div class="header-inner">
            <HeaderPart/>
          </div>
        </div>

        <div id="banner">
            <div class="banner-inner">
              <BannerPart/>
            </div>
        </div>
  </div>
</div>
</template>

<script>
import HeaderPart from './components/HeaderPart.vue';
import BannerPart from './components/BannerPart.vue';

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
    BannerPart
  }
}
</script>

<style>
body { margin: 0px}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header {
  width: 100%;
  height: 100px;
}

.header-inner {
  width: 1200px;
  height: 100px;
  margin: 0 auto;
}

.line{
  margin-top: 100px;
}

#banner {
  margin-top: 100px;
  width: 100%;
  height: 500px;
  background-color: #ecfbcc;
}

.banner-inner {
  width: 1200px;
  height: 500px;
  margin: 0 auto;
}

</style>
