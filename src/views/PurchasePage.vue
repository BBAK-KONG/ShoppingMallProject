<template>
  <!-- 주문 제품 정보 -->
  <div class="menu">
    <div class="menu-inner">
      <h2>01. 주문제품</h2>
    </div>
  </div>
  <!-- 주문 제품 목록 -->
  <div class="product-list">
    <!-- 제품 목록 맨 윗줄 표시 -->
    <div class="delimiter-line"></div>

    <div class="product-list-inner" v-for="(product, index) in products" :key="product" :index="index">
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
                    </tr>
                    <tr>
                      <div class="row">
                        <!-- 구매 수량 선택 -->
                        <div class="col-6">
                          <td class="quantity">{{ product.quantity }}개</td>
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
  </div>

  <!-- 배송지 정보 -->
  <div class="menu">
    <div class="menu-inner">
      <h2>02. 배송지 정보</h2>
    </div>
  </div>

  <div class="shipping-information">
    <div class="shipping-information-inner">
      <!-- 배송지 정보 맨 윗줄 구분선 -->
      <div class="delimiter-line"></div>
      <!-- 배송지 정보 -->
      <div class="row">
        <!-- 수령인 -->
        <div class="shipping-form">
          <span class="col-1">
            <span class="form-item">수령인</span>
          </span>
          <span class="col-11">
            <input type="text" name="lastname" id="lastname" class="form-control form-input input-lg" placeholder="이름"/>
          </span>
        </div>
        <!-- 핸드폰번호 -->
        <div class="shipping-form">
          <span class="col-1">
            <span class="form-item">휴대폰</span>
          </span>
          <span class="col-11">
            <input type="tel" name="phone" ref="phone" @change="checkPhone" 
            class="form-control form-input input-lg"
            placeholder="휴대폰 번호 (-없이 숫자만 입력)"/>
          </span>
        </div>
        <!-- 주소찾기 -->
        <div class="address-form">
          <span class="col-1">
            <span class="form-item">주소찾기</span>
          </span>
          <span class="col-11">
            <button id="searchButton" class="btn btn-block form-input btn-primary" 
            type="button" @click="searchAddress" style="margin:10px 0px 0px 10px; width:200px;">우편번호 찾기</button>
            <input type="text" ref="postcode" id="postcode" name="postcode" value="" 
            class="form-control form-input" placeholder="우편번호" disabled style="margin-top:10px; width:590px;">
          </span>
        </div>
        <div class="address-form">
          <span class="col-12">
            <input type="text" ref="address" id="address" class="form-control form-input" placeholder="주소" disabled>
          </span>
        </div>
        <div class="address-form">
          <span class="col-12">
            <input type="text" ref="detailAddress" id="detailAddress" class="form-control form-input" 
            placeholder="상세주소" style="margin-bottom:10px;">
          </span>
        </div>
        <!-- 배송지 정보 맨 윗줄 구분선 -->
        <div class="delimiter-line"></div>
      </div>
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
      <!-- 주문 상품 가격정보 맨 윗줄 구분선 -->
      <div class="delimiter-line" style="margin-bottom:10px;"></div>
      <!-- 주문 상품 가격 정보 -->
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
      <!-- 주문 상품 가격정보 맨 아랫줄 구분선 -->
      <div class="delimiter-line" style="margin-top:10px;"></div>
    </div>
  </div>

  <div class="payment-button-layout">
    <div class="payment-button-inner">
      <button type="button" class="payment-button btn-dark" 
      data-bs-toggle="modal" data-bs-target="#GuidanceModal">
        결제하기
      </button>
    </div>
  </div>

  <div class="modal fade" id="GuidanceModal" tabindex="-1" 
  aria-labelledby="modalTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <!-- 모달창 안내 문구 -->
        <div class="modal-body">
          <h5 style="margin: 50px 0px 50px 0px">
            {{getErrorMessage()}}
          </h5>
        </div>
        <!-- 모달창 닫기 버튼 -->
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products:[
        { image: 'http://ec2-13-125-74-101.ap-northeast-2.compute.amazonaws.com:3000/images/Electronic-Clock-Ryan&Choonsik.jpg', 
          name: "라이언과 춘식이의 전자시계", 
          price: 49000,
          quantity: 2
        },
        { image: 'http://ec2-13-125-74-101.ap-northeast-2.compute.amazonaws.com:3000/images/Face-Type-Mini-Cushion-Ryan.jpg',
          name: "라이언 리틀 얼굴쿠션", 
          price: 16000,
          quantity: 1
        }
      ],
      subtotal: 0,
      shipping: 0,
      totalPrice: 0,
      maxQuantity: 300,
      point: 3000,
      errorMessage: ""
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
    },

    checkPhone(){
      let phoneRegexForm = /^(01[0|1|6|7|8|9]|02|03[1-3]|04[1-4]|05[1-5]|06[1-4])([0-9]{3,4})([0-9]{4})$/;
      if(!phoneRegexForm.test(this.$refs.phone.value) && this.$refs.phone.value !== ""){
          this.$refs.phoneCheck.innerHTML = "올바른 번호를 입력해주세요";
          this.$refs.phone.focus();
          return false;
      }
      this.$refs.phoneCheck.innerHTML = " ";
      return true;
    },

    getErrorMessage(){
      return "휴대폰 번호를 입력해주세요";
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
    margin-top: 100px;
  }

  .delimiter-line{
    width: 1200px;
    border-bottom: 3px solid; 
    border-color: #d2d2d2;
    margin: 0 auto;
  }

  h2{
    float: left;
  }

  .product-list-inner {
    width: 1200px;
    height: 200px;
    border-bottom: 3px solid;
    border-color: #f0f0f0;
    padding-right:0px;
    padding-bottom: 0px;
    margin: 0 auto;
  } 

  .product-list img{
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

  .quantity{
    float: left;
    font-size: 25px;
  }

  .subtotal{
    float: right;
  }

  .shipping-information{
    width: 100%;
    height: 400px;
  }

  .shipping-information-inner{
    width: 1200px;
    height: 400px;
    margin: 0 auto;
  }

  .shipping-form{
    width: 1200px;
    margin: 0 auto;
    padding: 20px 0px 20px 0px;
    border-bottom: 3px solid;
    border-color: #f0f0f0;
  }

  .address-form{
    width: 1200px;
    margin: 0 auto;
    padding: 5px 0px 5px 0px;
  }


  .form-item{
    width: 150px; 
    font-size:25px;
    float:left;
    text-align: left;
    padding-top: 10px;
  }

  .form-input{
    width: 800px;
    font-size:25px;
    float:right;
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
