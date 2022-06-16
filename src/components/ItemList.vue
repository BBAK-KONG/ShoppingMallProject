<template>
  <!-- 주문 제품 목록 -->
  <div class="cont">
    <div class="cont-inner" v-for="(product, index) in products" :key="product" :index="index">
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
                      <div class="row">
                        <!-- 구매 수량 선택 -->
                        <div class="col-md-6 quantity-selection">
                          <select class="form-select" aria-label="quantity selection" 
                          @change="setQuantity(product.name, $event)" style="width:100px; font-size:20px;">
                            <option value="" selected disabled hidden>{{ product.quantity }}</option>
                            <option v-for="quantity in maxQuantity" :key="quantity" :value=quantity>{{quantity}}</option>
                          </select>
                        </div>
                        <!-- 상품 총 가격(상품가격*구매량) -->
                        <div class="col-md-6 subtotal">
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

    getProductNameToBeDeleted(productName){
      this.$emit('getProductNameToBeDeleted', productName);
    },

    setQuantity(productName, event){
      let quantity = event.target.value;

      this.$emit('setQuantity', productName, quantity);
    }
  }
}
</script>

<style scoped>
  h2{
    float: left;
  }

  .cont-inner {
    width: 1200px;
    height: 200px;
    border-bottom: 3px solid;
    border-color: #f0f0f0;
    padding-right:0px;
    padding-bottom: 0px;
    margin: 0 auto;
  } 

  .cont img{
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

</style>