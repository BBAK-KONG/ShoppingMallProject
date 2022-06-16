<template>
  <!-- 주문 제품 정보 -->
  <div class="menu">
    <div class="menu-inner">
      <h2>01. 주문제품</h2>
    </div>
  </div>
  <!-- 주문 제품 목록 -->
  <div class="container" v-for="(product, index) in products" :key="product" :index="index">
    <div class="purchase-card" >
      <div class="row">
        <div class="col-4">
          <img :src="product.image" class="img-fluid rounded-start" alt="product.name">
        </div>
        <div class="col-8" style="float: left">
          <div class="card-body">
            <p class="card-text">
              <table class="table product-table">
                <tbody>
                  <tr>
                    <!-- 상품명 -->
                    <td class="item">{{ product.name }}</td>
                    <button type="button" class="btn-close" aria-label="Close" style="float: right" 
                    @click="deleteProduct(product.name)" data-bs-toggle="modal" data-bs-target="#undeletableGuidanceModal">
                    </button>
                  </tr>
                  <tr>
                    <div class="row">
                      <!-- 구매 수량 선택 -->
                      <div class="col-6 quantity-selection">
                        <select class="form-select" aria-label="quantity selection" 
                        @change="setQuantity(product.name, $event)" style="width:100px; font-size:20px;">
                          <option value="" selected disabled hidden>{{ product.quantity }}</option>
                          <option v-for="quantity in maxQuantity" :key="quantity" :value=quantity>{{quantity}}</option>
                        </select>
                      </div>
                      <!-- 상품 총 가격(상품가격*구매량) -->
                      <div class="col-6 subtotal">
                        <td class="price">{{this.setComma(product.price * product.quantity)}}원</td>
                      </div>
                    </div>
                  </tr>
                </tbody>
              </table>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 주문 제품 가격 정보 -->
  <div class="price-information">
    <div class="price-information-inner">
      <table class="table">
        <tbody>
          <!-- 총 상품 금액 -->
          <tr>
            <th class="item" scope="row">
              상품가
            </th>
            <td class="price">
              <span>{{getSubtotal()}}</span>
            </td>
          </tr>
          <!-- 총 상품 금액에 따른 배송비 -->
          <tr>
            <th class="item" scope="row">
              배송비
            </th>
            <td class="price">
              <span>{{getShipping()}}</span>
            </td>
          </tr>
          <tr>
            <!-- 회원이 결제할 총 금액 -->
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
            <!-- 모달창 닫기 버튼 -->
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <!-- 모달창 안내 문구 -->
            <div class="modal-body">
              <h5>모든 상품을 제거하실 수 없습니다.<br><br>1개 이상의 상품을 선택해주세요.</h5>
            </div>
            <!-- 모달창 닫기 버튼 -->
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 배송지 정보 -->
  <div class="menu">
    <div class="menu-inner">
      <h2>02. 배송지 정보</h2>
    </div>
  </div>

  <!-- 결제 정보 -->
  <div class="menu">
    <div class="menu-inner">
      <h2>03. 결제하기</h2>
    </div>
  </div>
  <div class="payment-information">
    <div class="payment-information-inner">
      <table class="table">
        <tbody>
          <!-- 총 상품 금액 -->
          <tr>
            <th class="item" scope="row">
              상품가
            </th>
            <td class="price">
              <span>{{getSubtotal()}}</span>
            </td>
          </tr>
          <!-- 배송비 -->
          <tr>
            <th class="item" scope="row">
              배송비
            </th>
            <td class="price">
              <span>{{getShipping()}}</span>
            </td>
          </tr>
          <!-- 포인트 -->
          <tr>
            <th class="item" scope="row">
              포인트 ({{this.point}}p)
            </th>
            <td class="price">
              <input class="form-control-lg point-input" type="text" placeholder=0 aria-label="point input">
            </td>
          </tr>
          <!-- 총 결제금액 -->
          <tr>
            <th class="item" scope="row">
              <h2><strong>최종 결제금액</strong></h2>
            </th>
            <td class="price" style="color: red;">
              <h2><strong>{{getTotalPrice()}}</strong></h2>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="payment-button-layout">
    <div class="payment-button-inner">
      <button type="button" class="payment-button btn-dark">결제하기</button>
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
          quantity: 2
        },
        { image: require('@/assets/best-seller/Face-Type-Mini-Cushion-Ryan.jpg'), 
          name: "라이언 리틀 얼굴쿠션", 
          price: 16000,
          quantity: 1
        }
      ],
      subtotal: 0,
      shipping: 0,
      totalPrice: 0,
      maxQuantity: 300,
      point: 3000
    }
  },
  methods:{
    setComma(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    getSubtotal(){
      let sum = 0;

      for(let index=0; index<this.products.length; index++){
        sum += this.products[index].price * this.products[index].quantity;
      } 
      this.subtotal = sum;

      return this.setComma(this.subtotal) + "원";
    },

    getShipping(){
      if(this.subtotal < 30000){
        this.shipping = 3000;
      }

      if(this.shipping == 0){
        return "무료";
      }
      return this.setComma(this.shipping) + "원";
    },

    getTotalPrice(){
      this.totalPrice = this.subtotal + this.shipping;
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
    },

    setQuantity(productName, event){
      for(let index=0; index<this.products.length; index++){
        if(this.products[index].name == productName){
          this.products[index].quantity = event.target.value;
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
    border-bottom: 3px solid;
    border-color: #d2d2d2;
    margin-top: 100px;
  }

  h2{
    float: left;
  }

  .container {
    width: 1200px;
    height: 200px;
    border-bottom: 3px solid;
    border-color: #f0f0f0;
    padding-right:0px;
    padding-bottom: 0px;
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
    padding-right:0px;
  }

  .card-title{
    float: left;
  }

  .price-information{
    width: 100%;
    height: 170px;
    margin: 15px 0px 50px 0px;
  }

  .price-information-inner {
    width: 1200px;
    height: 170px;
    margin: 0 auto;
    border-bottom: 3px solid;
    border-color: #d2d2d2;
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

  .product-table{
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .quantity-selection{
    float: left;
  }

  .subtotal{
    float: right;
  }

  .payment-information{
    width: 100%;
    height: 270px;
    margin: 15px 0px 50px 0px;
  }

  .payment-information-inner {
    width: 1200px;
    height: 270px;
    margin: 0 auto;
    border-bottom: 3px solid;
    border-color: #d2d2d2;
  }

  .point-input{
    width: 150px; 
    text-align: right;
  }

  .payment-button{
    width: 400px;
    height: 100px;
    font-size: 30px;
    font-weight: bold;
  }

  .payment-button-layout{
    width: 100%;
    height: 250px;
    margin: 15px 0px 50px 0px;
  }

  .payment-button-inner {
    width: 1200px;
    height: 250px;
    margin: 0 auto;
  }
</style>
