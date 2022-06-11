<template>
  <h1>주간 베스트 상품</h1>

  <div class="container">
    <div class="row g-5">
      <div class="col-4" v-for="product in products" :key="product">
        <div class="card">
          <img :src="product.image" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{product.price}}</p>  
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
          price: "49,000원",},
        { image: require('@/assets/best-seller/Face-Type-Mini-Cushion-Ryan.jpg'), 
          name: "라이언 리틀 얼굴쿠션", 
          price: "16,000원",},
        { image: require('@/assets/best-seller/Ice-Mug-Apeach.jpg'), 
          name: "시원한아이스머그_어피치", 
          price: "10,000원",}
      ]
    }
  }
}
</script>
>

<style>

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

  .best-seller-button{
    margin: 30px 0px 30px 0px;
  }

</style>