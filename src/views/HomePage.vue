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

  <div id="new-product">
      <div class="new-product-inner">
        <NewProduct/>
      </div>
  </div>

</template>

<script>
import BannerPart from '../components/BannerPart.vue';
import BestSeller from '../components/BestSeller.vue';
import NewProduct from '../components/NewProduct.vue';

export default {
  components: {
    BannerPart,
    BestSeller,
    NewProduct
  }
}


</script>

<style>
#banner {
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
  margin-top: 150px;
  width: 100%;
  height: 1600px;
} 

.best-seller-inner {
  width: 1200px;
  height: 1600px;
  margin: 0 auto;
}

#new-product {
  margin-top: 150px;
  width: 100%;
  height: 800px;
} 

.new-product-inner {
  width: 1200px;
  height: 800px;
  margin: 0 auto;
}

</style>
