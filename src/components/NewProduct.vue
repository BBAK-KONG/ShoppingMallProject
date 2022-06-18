<template>
  <div class="title">
    <div class="main-title">신상품</div>
    <div class="sub-title">BBAK_KONG's 신상품!</div>
  </div>
  <div class="container">
    <div class="row g-4">
      <div class="col-4" v-for="(product, index) in products" :key="product" :index="index">
        <div class="card" v-if="index < 3">
          <div class="card-header bg-white border-bottom-0">
            <span class="new-mark">new!</span>
          </div>
          <img :src="product.image" class="card-img-top" alt="product.name">
          <div class="card-body">
            <p class="card-title">{{ product.name }}</p>
            <p class="card-text">{{setComma(product.price)}}원</p>
            <button type="button" class="btn btn-outline-success" @click="addToShoppingCart(product)">장바구니 담기</button>
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
      products: this.getProductData()
    }
  },
  methods: {
    checkLoggedIn(){
      if(this.$cookies.get('user_id') == null){
        alert("로그인 후 이용해주세요");
        return false;
      }
    },

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
    font-size: 16px;
    font-weight: 300;
  }

  .new-product-button{
    margin: 30px 0px 30px 0px;
  }

</style>