<template>
  <div id="category">
      <div class="category-inner">
        <h3>전체 상품</h3>
        <div class="container" style="margin-top:70px">
          <div class="row gx-5">
            <div class="col-sm" v-for="category in category" :key="category">
              <div class="character-card" @click="changeCategory(category.name)">
                <img :src="category.image" class="card-img-top" alt="category.name">
                <div class="card-footer bg-white border-top-0">
                  <h5 class="card-title">{{ category.name }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="dropdown">
          <a class="btn btn-secondary dropdown-toggle btn-lg" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            정렬 기준
          </a>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><a class="dropdown-item" href="#">인기순</a></li>
            <li><a class="dropdown-item">신상품순</a></li>
            <li><a class="dropdown-item" @click="sortByHighPrice">높은 가격순</a></li>
            <li><a class="dropdown-item" @click="sortByLowPrice">낮은 가격순</a></li>
          </ul>
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
              <p class="card-text"> {{product.price}}원</p>  
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
          price: "49000",},
        { image: require('@/assets/best-seller/Face-Type-Mini-Cushion-Ryan.jpg'), 
          name: "라이언 리틀 얼굴쿠션", 
          price: "16000"},
        { image: require('@/assets/best-seller/Ice-Mug-Apeach.jpg'), 
          name: "시원한아이스머그_어피치", 
          price: "10000"},
        { image: 'https://t1.kakaocdn.net/friends/prod/product/20200807170225137_8809721503959_AW_00.jpg', 
          name: "목쿠션_어피치", 
          price: "12000"},
        { image: 'https://t1.kakaocdn.net/friends/prod/product/20211209163903387_8809814920793_AW_03.jpg', 
          name: "자석마스크걸이_라이언&춘식이", 
          price: "15000"},
        { image: 'https://t1.kakaocdn.net/friends/prod/product/20220214140504221_8809814924562_AW_01.jpg', 
          name: "춘식이 피규어주차번호판", 
          price: "16000"},
        { image: 'https://t1.kakaocdn.net/friends/prod/product/20220525112943571_8809814925477_8809814925477_AW_00.jpg', 
          name: "머니건_라이언&춘식이", 
          price: "19900"},
        { image: 'https://t1.kakaocdn.net/friends/prod/product/20220509104011136_8809814926313_8809814926313_AW_00.jpg', 
          name: "핸디형 미니 선풍기_어피치", 
          price: "22000"},
        { image: 'https://t1.kakaocdn.net/friends/prod/product/20220516120300962_8809814924654_8809814924654_AW_00.jpg', 
          name: "10000mAh춘식이보조배터리", 
          price: "49000"}
      ],
      productList:[]
    }
  },
  
  methods: {
    changeCategory(character){
      this.productList = [];

      if(character == '전체'){
        for(let index=0; index<this.products.length; index++){
          this.productList.push(this.products[index]);
        }
      }
      else{
        for(let index=0; index<this.products.length; index++){
          if(this.products[index].name.includes(character)){
            this.productList.push(this.products[index]);
          }
        }
      }
    },

    sortByLowPrice(){
      this.productList.sort(function(a,b){
        return a.price - b.price
      });
    },

    sortByHighPrice(){
      this.productList.sort(function(a,b){
        return b.price - a.price
      });
    },

    comma(price){
      return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
    width: 900px;
    height: 600px;
    margin: 0 auto;
  }
  
  .character-card img{
    border-radius: 100%;
    cursor: pointer;
  }

  .dropdown{
    margin-top: 60px;
  }
</style>