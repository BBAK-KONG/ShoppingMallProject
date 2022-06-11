<template>
  <div id="banner">
      <div class="banner-inner">
        <BannerPart/>
      </div>
  </div>
  <div id="best-seller">
      <div class="best-seller-inner">
        <BestSeller/>
      </div>
  </div>
</template>

<script>
import BannerPart from '../components/BannerPart.vue';
import BestSeller from '../components/BestSeller.vue';

export default {
  components: {
    BannerPart,
    BestSeller
  }
}
</script>

<style>
#banner {
  margin-top: 100px;
  width: 100%;
  height: 600px;
  background-color: #ecfbcc;
} 

.banner-inner {
  width: 1200px;
  height: 600px;
  margin: 0 auto;
}

#best-seller {
  margin-top: 100px;
  width: 100%;
  height: 600px;
} 

.best-seller-inner {
  width: 1200px;
  height: 600px;
  margin: 0 auto;
}
</style>
