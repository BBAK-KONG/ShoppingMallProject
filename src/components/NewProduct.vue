<template>
  <div class="title">
    <h2>신상품</h2>
    <h5>BBAK_KOONG's 신상품!</h5>
  </div>
  <div class="container">
    <div class="row g-5">
      <div class="col-4" v-for="(product, index) in products" :key="product" :index="index">
        <div class="card">
          <div class="card-header bg-white border-bottom-0">
            <span class="new-mark">new!</span>
          </div>
          <img :src="product.image" class="card-img-top" alt="product.name">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{product.price}}원</p>  
            <a href="#" class="btn btn-primary">구매하기</a>
          </div>
        </div>
      </div>
    </div>
    <!-- 베스트 상품 목록 -->
    <div class="new-product-button">
      <button type="button" class="btn btn-outline-success">신상품 더 보기</button>
    </div>
    <!-- 베스트 상품 더 보기 버튼 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      products:[
        { image: 'https://t1.kakaocdn.net/friends/prod/product/20220525112943571_8809814925477_8809814925477_AW_00.jpg', 
          name: "머니건_라이언&춘식이", 
          price: "19,900",},
        { image: 'https://t1.kakaocdn.net/friends/prod/product/20220509104011136_8809814926313_8809814926313_AW_00.jpg', 
          name: "핸디형 미니 선풍기_어피치", 
          price: "22,000",},
        { image: 'https://t1.kakaocdn.net/friends/prod/product/20220516120300962_8809814924654_8809814924654_AW_00.jpg', 
          name: "10000mAh춘식이보조배터리", 
          price: "49,000",}
      ]
    }
  }
}
</script>
>

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

  .card .new-mark{
    font-size: 30px;
    font-weight: 300;
  }

  .new-product-button{
    margin: 30px 0px 30px 0px;
  }

</style>