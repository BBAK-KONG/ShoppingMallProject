<template>
  <div id="category">
      <div class="category-inner">
        <h3>전체 상품</h3>
        <div class="container" style="margin-top:70px">
          <div class="row">
            <div class="col-3" v-for="category in category" :key="category">
              <div class="character-card" style="width: 10em" @click="changeCategory(category.name)">
                <img :src="category.image" class="card-img-top" alt="category.name">
                <div class="card-footer bg-white border-top-0">
                  <h5 class="card-title">{{ category.name }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>

  <div id="product-list">
    <div class="container">
      <div class="row g-5">
        <div class="col-4" v-for="(product, index) in productList" :key="product" :index="index" >
          <div class="card">
            <img :src="product.image" class="card-img-top" alt="product.name">
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{product.price}}원</p>  
              <a href="#" class="btn btn-primary">구매하기</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  data() {
    return {
      category:[
        { image: require('@/assets/all-products/kakaoFriends.jpg'), 
          name: "전체",
        },
        { image: 'https://t1.kakaocdn.net/friends/prod/character/character_20220531165241_96.png', 
          name: "라이언",
        },
        { image: 'https://t1.kakaocdn.net/friends/prod/character/character_20220531165302_96.png', 
          name: "어피치",
        },
        { image: 'https://t1.kakaocdn.net/friends/prod/character/character_20220531165550_96.png', 
          name: "춘식이",
        },
      ],
      products:[
        { image: require('@/assets/best-seller/Electronic-Clock-Ryan&Choonsik.jpg'), 
          name: "라이언과 춘식이의 전자시계", 
          price: "49,000",},
        { image: require('@/assets/best-seller/Face-Type-Mini-Cushion-Ryan.jpg'), 
          name: "라이언 리틀 얼굴쿠션", 
          price: "16,000",},
        { image: require('@/assets/best-seller/Ice-Mug-Apeach.jpg'), 
          name: "시원한아이스머그_어피치", 
          price: "10,000",},
        { image: 'https://t1.kakaocdn.net/friends/prod/product/20200807170225137_8809721503959_AW_00.jpg', 
          name: "목쿠션_어피치", 
          price: "12,000",},
        { image: 'https://t1.kakaocdn.net/friends/prod/product/20211209163903387_8809814920793_AW_03.jpg', 
          name: "자석마스크걸이_라이언&춘식이", 
          price: "15,000",},
        { image: 'https://t1.kakaocdn.net/friends/prod/product/20220214140504221_8809814924562_AW_01.jpg', 
          name: "춘식이 피규어주차번호판", 
          price: "16,000",}
      ],
      productList:[]
    }
  },
  
  methods: {
    changeCategory(characther){
      this.productList = [];

      if(characther == '전체'){
        for(let index=0; index<this.products.length; index++){
          this.productList.push(this.products[index]);
        }
      }

      if(characther == '라이언'){
        for(let index=0; index<this.products.length; index++){
          if(this.products[index].name.includes('라이언')){
            this.productList.push(this.products[index]);
          }
        }
      }

      if(characther == '어피치'){
        for(let index=0; index<this.products.length; index++){
          if(this.products[index].name.includes('어피치')){
            this.productList.push(this.products[index]);
          }
        }
      }

      if(characther == '춘식이'){
        for(let index=0; index<this.products.length; index++){
          if(this.products[index].name.includes('춘식이')){
            this.productList.push(this.products[index]);
          }
        }
      }
    }
  },
}
</script> 

<style>
  #category {
  margin-top: 200px;
  width: 100%;
  height: 600px;
  } 

  .category-inner {
    width: 1200px;
    height: 600px;
    margin: 0 auto;
  }
  
  .character-card img{
    border-radius: 100%;
  }

</style>