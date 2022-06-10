<template>
  <div>
    <banner-image
      @next="next"
      @prev="prev"
    >
      <banner-slide v-for="(item, index) in slides" 
        :key="item" 
        :index="index"
        :visibleSlide="visibleSlide">  
        <img class="banner-img" :src="require(`@/assets/${item}.jpg`)"/>
      </banner-slide>
    </banner-image>
  </div>
</template>

<script> 
import BannerImage from './BannerImage.vue';
import BannerSlide from './BannerSlide.vue';

export default {
  data(){  //데이터 보관함
    return {
      slides: [
        "lion",
        "tube",
        "apeach",
      ],
      visibleSlide : 0
    }
  },
  computed: {
    slidesLen(){
      return this.slides.length;
    }
  },
  methods : {
    next(){
      if(this.visibleSlide >= this.slidesLen - 1){
        this.visibleSlide = 0;
      }
      else{
        this.visibleSlide++;
      }
    },
    prev(){
      if(this.visibleSlide <= 0){
        this.visibleSlide = this.slidesLen - 1;
      }
      else{
        this.visibleSlide--;
      }
    }
  },
  components: {
    BannerImage : BannerImage,
    BannerSlide : BannerSlide
  }
}
</script>

<style>
  .banner-img{
    height: 500px;
  }
</style>