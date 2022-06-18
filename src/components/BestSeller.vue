<template>
  <div class="title">
    <div class="main-title">주간 베스트 상품</div>
    <div class="sub-title">BBAK_KONG's 주간 인기 상품을 만나보세요!</div>
  </div>
  <div class="container">
    <div class="row g-4">
      <div class="col-4" v-for="(product, index) in products" :key="product" :index="index" >
        <div class="card" v-if="index < 6">
          <div class="rank-box"> <span class="rank">{{index + 1}}</span></div>
          <img :src="product.image" class="card-img-top" alt="image">
          <div class="card-body">
            <p class="card-title">{{ product.name }}</p>
            <p class="card-text">{{setComma(product.price)}}원</p>
            <button type="button" class="btn btn-outline-success" @click="addToShoppingCart(product)">장바구니 담기</button>
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
      products: this.getProductData()
    }
  },
  methods: {
    setComma(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    getProductData(){
      fetch("http://ec2-13-125-74-101.ap-northeast-2.compute.amazonaws.com:3000/products")
      .then((response) => response.json())
      .then((data) => this.products = data);
    },

    addToShoppingCart(product){   
    if(this.$cookies.get('user_id') == null){
      alert("로그인 후 이용해주세요");
      return;
    }
    fetch("http://ec2-13-125-74-101.ap-northeast-2.compute.amazonaws.com:3000/baskets/add", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        user_id : this.$cookies.get('user_id'),
        product_id : product.product_id,
        count : "1",
    }),
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
    alert("장바구니 담기가 완료되었습니다!");
    },
  },
}
</script>

<style>
  .title{
    margin: 70px 0px 70px 0px;
  }

  .main-title{
    font-size: 25px;
    font-weight: bold;
  }

  .sub-title{
    font-size: 14px;
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

  .card-title {
    font-size: 16px;
    height: 40px;
  }

  .card-text{
    font-size: 16px;
    font-weight: bold;
  }

  .card .rank-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: black;
    color: white;
    position: static;
    transition: all ease;
  }

  .card .rank{
    font-size: 20px;
    font-weight: 300;
  }

  .best-seller-button{
    margin: 30px 0px 30px 0px;
  }

</style>