<template>
    <!-- 주문 제품 정보 -->
  <div class="menu">
    <div class="menu-inner">
      마이페이지
    </div>
  </div>

  <div class="container">
    <div class="row">
        <div class="col-lg-6">
            <div class="card card-margin">
                <div class="card-header no-border">
                    <h5 class="card-title">포인트</h5>
                </div>
                <div class="card-body pt-0">
                    <img alt="" class="thumb_g w-50" src="https://st.kakaocdn.net/commerce_ui/front-friendsshop/real/20220616/155659/assets/images/m960/ico_cart_empty.png">
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="card card-margin">
                <div class="card-header no-border">
                    <h5 class="card-title">정보수정</h5>
                </div>
                <div class="card-body pt-0">
                    <img alt="" class="thumb_g w-50" src="https://st.kakaocdn.net/commerce_ui/front-friendsshop/real/20220616/155659/assets/images/m960/ico_cart_empty.png">
                </div>
            </div>
        </div>
    </div>

    <div class="menu">
        <div class="menu-inner">
        구매물품
        </div>
    </div>

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
                      <td class="item">상품명 : {{ product.name }}</td>
                    </tr>
                    <tr>
                      <!-- 상품개수 -->
                      <td class="item">개수 : {{ product.quantity }}</td>
                    </tr>
                    <tr>
                      <!-- 상품가격 -->
                      <td class="item">가격 : {{ setComma(product.price * product.quantity) }}</td>
                    </tr>
                    <tr>
                      <!-- 구매일자-->
                      <td class="item">구매일자 : {{ new Date() }}</td>
                    </tr>
                  </tbody>
                </table>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="menu-inner"></div>
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
      productNameToBeDeleted: "",
      totalPrice: 0
    }
  },
  methods: {
    setComma(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
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
  margin-top: 70px;
  font-size: 30px;
}

.item{
  text-align: left;
  padding-top: 30px;
  font-size: 28px;
}

</style>