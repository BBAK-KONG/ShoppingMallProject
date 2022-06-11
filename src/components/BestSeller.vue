<template>
  <h1>주간 베스트 상품</h1>
  <div class="container">
    <div class="row g-5">
      <div class="col-4">
        <div class="card">
          <img src="@/assets/best-seller/Electronic-Clock-Ryan&Choonsik.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">라이언과 춘식이의 전자시계</h5>
            <p class="card-text">49,000원</p>
            <a href="#" class="btn btn-primary">구매하기</a>
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="card">
          <img src="@/assets/best-seller/Face-Type-Mini-Cushion-Ryan.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">라이언 리틀 얼굴쿠션</h5>
            <p class="card-text">16,000원</p>
            <a href="#" class="btn btn-primary">구매하기</a>
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="card">
          <img src="@/assets/best-seller/Ice-Mug-Apeach.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">시원한아이스머그_어피치</h5>
            <p class="card-text">10,000원</p>
            <a href="#" class="btn btn-primary">구매하기</a>
          </div>
        </div>
      </div>
    </div>
    <div class="best-seller-button">
      <button type="button" class="btn btn-outline-success">베스트 상품 더 보기</button>
    </div>

    
  </div>
</template>

<style>

  .card :hover{
    transform: scale(1.1);
  }

  .best-seller-button{
    margin: 30px 0px 30px 0px;
  }

</style>