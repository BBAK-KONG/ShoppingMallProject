<template>
  <div class="title">
    <h2>주간 베스트 상품</h2>
    <h5>BBAK_KONG's 주간 인기 상품을 만나보세요!</h5>
  </div>

  <div class="container">
    <div class="row g-5">
      <div class="col-4" v-for="(product, index) in products" :key="product" :index="index" >
        <div class="card">
          <div class="rank-box"> <span class="rank">{{index + 1}}</span></div>
          <img :src="product.image" class="card-img-top" alt="product.name">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{setComma(product.price)}}원</p>  
            <a href="#" class="btn btn-primary">구매하기</a>
          </div>
        </div>
      </div>
    </div>
    <!-- 베스트 상품 목록 -->
    <div class="best-seller-button">
      <button type="button" class="btn btn-outline-success">베스트 상품 더 보기</button>
    </div>
    <!-- 베스트 상품 더 보기 버튼 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      products:[
        { image: require('@/assets/best-seller/Electronic-Clock-Ryan&Choonsik.jpg'), 
          name: "라이언과 춘식이의 전자시계", 
          price: 49000},
        { image: require('@/assets/best-seller/Face-Type-Mini-Cushion-Ryan.jpg'), 
          name: "라이언 리틀 얼굴쿠션", 
          price: 16000},
        { image: require('@/assets/best-seller/Ice-Mug-Apeach.jpg'), 
          name: "시원한아이스머그_어피치", 
          price: 10000},
        { image: 'https://t1.kakaocdn.net/friends/prod/product/20200807170225137_8809721503959_AW_00.jpg', 
          name: "목쿠션_어피치", 
          price: 12000},
        { image: 'https://t1.kakaocdn.net/friends/prod/product/20211209163903387_8809814920793_AW_03.jpg', 
          name: "자석마스크걸이_라이언&춘식이", 
          price: 15000},
        { image: 'https://t1.kakaocdn.net/friends/prod/product/20220214140504221_8809814924562_AW_01.jpg', 
          name: "춘식이 피규어주차번호판", 
          price: 16000}
      ]
    }
  },
  methods: {
    setComma(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
}
</script>

<style>
  .title{
    margin: 70px 0px 70px 0px;
  }

  .card {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 3px 8px 0px;
    background: #fff;
    transition: all 0.5s ease;  
    cursor: pointer;
    z-index: 10;
    overflow: hidden 
  }

  .card:hover {
    color: #fff;
    transform: scale(1.025);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px 0px;
  }

  .card .rank-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    background-color: black;
    color: white;
    position: static;
    transition: all ease
  }

  .card .rank{
    font-size: 30px;
    font-weight: 300;
  }

  .best-seller-button{
    margin: 30px 0px 30px 0px;
  }

</style>