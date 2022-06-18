<template>
  <!-- 주문 제품 목록 맨 위 구분선 -->
  <div class="delimiter-line" style="margin-top:10px;"></div>
  <!-- 주문 제품 목록 -->
  <div class="product-list">
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
                      <button type="button" class="btn-close" aria-label="Close" style="float: right" 
                      data-bs-toggle="modal" data-bs-target="#undeletableGuidanceModal"
                      @click="getProductNameToBeDeleted(product.name)">
                      </button>
                    </tr>
                    <tr>
                      <!-- 상품 가격 -->
                      <div class="subtotal">
                        <td class="price">{{this.setComma(product.price)}}원</td>
                      </div>
                    </tr>
                    <tr>
                      <div class="row" style="margin-top:10px;">
                        <!-- 구매 수량 선택 -->
                        <div class="col-6">
                          <div class="row">
                            <button type="button" class="quantity-btn" @click="minusQuantity(product.name)"> 
                              <img src="@/assets/minus.png">
                            </button>

                            <span class="quantity">{{ product.quantity }}</span>
                            
                            <button type="button" class="quantity-btn" @click="plusQuantity(product.name)"> 
                              <img src="@/assets/plus.png">
                            </button>
                          </div>
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
              <span>{{setShipping()}}{{this.shippingStatus}}</span>
            </td>
          </tr>
          <tr>
            <!-- 회원이 결제할 총 금액 -->
            <th class="item" scope="row" style="font-size: 22px;">
              총 결제금액
            </th>
            <td class="price" style="font-size: 22px">
              <span><strong>{{getTotalPrice()}}</strong></span></td>
          </tr>
        </tbody>
      </table>
      <!-- 결제금액 안내 맨아래 구분선 -->
      <div class="delimiter-line" style="margin-top:10px;"></div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    products: Array
  },
  data() {
    return {
      subtotal: 0,
      shipping: 0,
      shippingStatus: "",
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

    setShipping(){
      if(this.subtotal < 30000){
        this.shipping = 3000;
      }
      else{
        this.shipping = 0;
      }
      this.shippingStatus = this.getShipping();
    },

    getTotalPrice(){
      this.totalPrice = this.subtotal + this.shipping;
      this.$emit('getTotalPrice', this.totalPrice);

      return this.setComma(this.totalPrice) + "원";
    },

    getProductNameToBeDeleted(productName){
      this.$emit('getProductNameToBeDeleted', productName);
    },

    setQuantity(productName, event){
      let quantity = event.target.value;

      this.$emit('setQuantity', productName, quantity);
    },

    minusQuantity(productName){
      this.$emit('minusQuantity', productName);
    },

    plusQuantity(productName){
      this.$emit('plusQuantity', productName);
    },
  },
}
</script>

<style scoped>
  h2{
    float: left;
  }

  .delimiter-line{
    width: 900px;
    border-bottom: 3px solid; 
    border-color: #d2d2d2;
    margin: 0 auto;
  }

  .product-list-inner {
    width: 900px;
    height: 180px;
    border-bottom: 3px solid;
    border-color: #f0f0f0;
    padding-right:0px;
    padding-bottom: 0px;
    margin: 0 auto;
  } 

  .product-list img{
    float: left;
    height: 180px;
    border-bottom: 3px solid;
    border-color: #f0f0f0;
  }

  .card-body{
    width: 100%;
    height: 100px;
    padding-top:0px;
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
    width: 900px;
    height: 170px;
    margin: 0 auto;
  }

  .item{
    float: left;
    font-size: 16px;
    font-weight: normal;
    border-bottom: none;
  }

  .price{
    float: right;
    font-size: 16px;
    border-bottom: none;
  }

  .product-table{
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .quantity-selection{
    float: left;
  }

  .quantity{
    margin: 0px 0px 0px 25px; 
    width:70px; 
    font-size:16px;   
    font-weight: normal;         
    border: 3px solid;
    border-color: #f0f0f0;
  }

  .quantity-btn{
    width:25px; 
    height:25px; 
    border-radius:100%; 
    cursor: pointer;
    background-color:transparent;
    border:0;
  }

  .quantity-btn img{
    width:25px; 
    height:25px; 
    background-color:transparent; 
    border:0
  }

  .subtotal{
    float: left;
    margin-top: 5px; 
  }

</style>