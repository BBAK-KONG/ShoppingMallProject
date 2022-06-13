<template>
  <div id="product-image">
    <img src="@/assets/best-seller/Face-Type-Mini-Cushion-Ryan.jpg" class="rounded mx-auto d-block w-25" alt="상품이미지">
  </div>

  <div id="product-explain">
    <p id="product-name">{{productName[0]}}</p>
    <p id="product-price">{{productPrice[1]}}원</p>
  </div>

  <div id="product-detail">
  </div>
  <div id="purchase-button">
    <button type="button" class="btn btn-primary btn-lg btn-block">구매하기</button>
  </div>

</template>

<script>
export default {
  data(){
    return{
      productName : ["라이언쿠션", "어피치노트"],
      productPrice : [29000, 30000],
    }
  }
}
</script>

<style>
#product-image {
  margin-top: 200px;
  text-align: center;
} 

#product-explain{
  margin-top: 20px;
}

#product-name{
  font-size: 30px;
  font-weight: bold;
}

#product-price{
  font-weight: bold;
}

#purchase-button{
  display: block;
}
</style>
