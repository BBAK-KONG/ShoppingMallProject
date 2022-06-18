<template>
  <div>
    <div id="header">
      <div class="header-inner">
        <div class="menu" align="right">
          <div v-if="userId == null">
              <router-link to="/LoginPage">로그인</router-link>
              <router-link to="/SignUpPage">회원가입</router-link>
          </div>
          <div v-else>
              <span>{{userId}}님 환영합니다.</span>
              <router-link to="/" @click="logout">로그아웃</router-link>
              
          </div>
        </div> 

        <span calss="logo">
          <router-link to="/">
            <img class="logo-img" src = "http://ec2-13-125-74-101.ap-northeast-2.compute.amazonaws.com:3000/images/logo.jpg"/>
          </router-link>
          <input class="searchInput" type="text">
          <span class="user-menu">
            <router-link to="/ShoppingCartPage">
              <img class="cart-img" src = "http://ec2-13-125-74-101.ap-northeast-2.compute.amazonaws.com:3000/images/cart.png"/>
            </router-link>
            <router-link to="/UserPage">
              <img class="myPage-img" src = "http://ec2-13-125-74-101.ap-northeast-2.compute.amazonaws.com:3000/images/myPage.png"/>
            </router-link>
          </span>
        </span>

        <div class="category">
          <div class="category-img-part">
            <img class="category-image" src = "http://ec2-13-125-74-101.ap-northeast-2.compute.amazonaws.com:3000/images/category.png"/>
          </div>
          <router-link to="/AllProductsPage">전체 상품</router-link>
          <a href="#">베스트</a>
          <a href="#">신상</a>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            userId: this.$cookies.get('user_id')
      }
    },

    methods: {
    
    refresh(){
      this.$router.go()
    },

    logout(){
      this.$cookies.remove('user_id');
      this.$router.go();
    }
  }
}
</script>


<style>

.menu{
  padding: 20px 0px 20px 0px;
}

.menu a{
  padding: 0px 0px 0px 30px;
  text-decoration:none;
}

.logo-img{
  height: 80px;
  vertical-align: top;
  margin: 0px 0px 0px 40px;
}

.searchInput{
  width: 40%;
  height: 50px;
  margin: 15px 50px 0px 40px;
  padding: 0px 20px 0px 20px;
  font-weight: bold;
  font-size: 15px;
  border-radius: 100px;
  border: 1px solid green;
}

.user-menu{
  width: 130px; 
  padding: 0px 0px 0px 160px;
  text-align: right;
  vertical-align: top;
}

.cart-img{
  height: 40px;
  margin: 20px 0px 0px 0px;
  vertical-align: top;
}

.myPage-img{
  height: 40px;
  margin: 20px 0px 0px 50px;
  vertical-align : top;
}

.category{
  margin: 20px 0px 0px 0px;
}

.category-img-part{
  float: left; 
  width: 25%;
  display: flex;
  text-align: center;
}

.category-image{
  height: 30px;
}

.category a{
  float: left; 
  width: 25%;
  display: flex;
  text-align: center;
  font-size: 16px;
  text-decoration-line: none;
  color: black;
}

#header {
  width: 100%;
  height: 250px;
}

.header-inner {
  width: 1200px;
  height: 100px;
  margin: 0 auto;
}

</style>