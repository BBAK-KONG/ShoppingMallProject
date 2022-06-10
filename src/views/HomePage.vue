<template>
  <div id="banner">
      <div class="banner-inner">
        <BannerPart/>
      </div>
  </div>
</template>

<script>
import BannerPart from '../components/BannerPart.vue';

export default {
  components: {
    BannerPart
  }
}
</script>

<style>
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
