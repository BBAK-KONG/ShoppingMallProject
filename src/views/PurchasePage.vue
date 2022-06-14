<template>
  <div class="menu">
    <div class="menu-inner">
      <h2>01. 주문제품</h2>
    </div>
  </div>
  <div class="container" v-for="(product, index) in products" :key="product" :index="index">
    <div class="purchase-card">
      <div class="row">
        <div class="col-4">
          <img :src="product.image" class="img-fluid rounded-start" alt="product.name">
        </div>
        <div class="col-8" style="float: left">
          <div class="card-body">
            <p class="card-text">
              <table class="table">
                <tbody>
                  <tr>
                    <td class="item" style="margin-bottom:50px">{{ product.name }}</td>
                    <button type="button" class="btn-close" aria-label="Close" style="float: right" 
                    @click="deleteProduct(product.name)" data-bs-toggle="modal" data-bs-target="#undeletableGuidanceModal">
                    </button>
                  </tr>
                  <tr>
                    <td class="item">{{this.setComma(product.price)}}원</td>
                  </tr>
                </tbody>
              </table>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="price-information">
    <div class="price-information-inner">
      <table class="table">
          <tbody>
            <tr>
              <th class="item" scope="row">
                상품금액
              </th>
              <td class="price">
                <span>{{getSubTotal()}}</span>
              </td>
            </tr>
            <tr>
              <th class="item" scope="row">
                배송비
              </th>
              <td class="price">
                <span>{{getShipping()}}</span>
              </td>
            </tr>
            <tr>
              <th class="item" scope="row">
                총 결제금액
              </th>
              <td class="price">
                <span><strong>{{getTotalPrice()}}</strong></span></td>
            </tr>
          </tbody>
      </table>
      
      <!-- 현재 구매상품이 하나만 있는데 삭제하려고 할 경우 모달창을 띄움(구매상품이 최소 1개가 있어야 하기 때문) -->
      <div class="modal fade" id="undeletableGuidanceModal" tabindex="-1" 
      aria-labelledby="modalTitle" aria-hidden="true"
      v-if="this.products.length == 1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalTitle">삭제 불가 안내</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h5>모든 상품을 제거하실 수 없습니다.<br>1개 이상의 상품을 선택해주세요.</h5>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="menu">
    <div class="menu-inner">
      <h2>02. 배송지 정보</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products:[
        { image: require('@/assets/best-seller/Electronic-Clock-Ryan&Choonsik.jpg'), 
          name: "라이언과 춘식이의 전자시계", 
          price: 49000,
          quantity: "2"
        },
        { image: require('@/assets/best-seller/Face-Type-Mini-Cushion-Ryan.jpg'), 
          name: "라이언 리틀 얼굴쿠션", 
          price: 16000,
          quantity: "1"  
        }
      ],
      subTotal: 0,
      shipping: 0,
      totalPrice: 0
    }
  },
  methods:{
    setComma(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    getSubTotal(){
      let sum = 0;

      for(let index=0; index<this.products.length; index++){
        sum += this.products[index].price;
      } 
      this.subTotal = sum;

      return this.setComma(this.subTotal) + "원";
    },
    getShipping(){
      if(this.subTotal < 30000){
        this.shipping = 3000;
      }
      
      if(this.shipping == 0){
        return "무료";
      }
      return this.setComma(this.shipping) + "원";
    },
    getTotalPrice(){
      this.totalPrice = this.subTotal + this.shipping;
      return this.setComma(this.totalPrice) + "원";
    },
    deleteProduct(productName){
      if(this.products.length == 1){
        return;
      }

      for(let index=0; index<this.products.length; index++){
        if(this.products[index].name == productName){
          this.products.splice(index, 1);
          break;
        }
      }
    }
  }
}

</script>

<style scoped>
  #menu {
    width: 100%;
    height: 50px;
  } 

  .menu-inner {
    width: 1200px;
    height: 50px;
    margin: 0 auto;
  }

  h2{
    float: left;
  }

  .container {
    width: 1200px;
    height: 200px;
    border-bottom: 3px solid;
    border-color: #f0f0f0;
  } 

  .container img{
    float: left;
    height: 200px;
    border-bottom: 3px solid;
    border-color: #f0f0f0;
  }

  .card-body{
    width: 100%;
    height: 100px;
  }

  .card-title{
    float: left;
  }

  .price-information{
    width: 100%;
    height: 170px;
    margin: 30px 0px 50px 0px;
  }

  .price-information-inner {
    width: 1200px;
    height: 170px;
    margin: 0 auto;
  }

  .item{
    float: left;
    font-size: 25px;
    border-bottom: none;
  }

  .price{
    float: right;
    font-size: 25px;
    border-bottom: none;
  }

</style>
