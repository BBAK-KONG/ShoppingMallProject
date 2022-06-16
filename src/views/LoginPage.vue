<template>
    <div class="container">
        <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-6">
            <img src="https://st.kakaocdn.net/commerce_ui/front-friendsshop/real/20220616/155659/assets/images/m960/ico_cart_empty.png"
            class="img-fluid w-75" alt="Sample image">
        </div>
        <div class="col-4">
            <!-- id input -->
            <div class="form-outline mb-4">
                <input type="text" id="userId" class="form-control form-control-lg"
                placeholder="아이디를 입력해주세요" />
            </div>

            <!-- Password input -->
            <div class="form-outline mb-3">
                <input type="password" id="userPw" class="form-control form-control-lg"
                placeholder="비밀번호를 입력해주세요" />
            </div>

            <div class="d-flex justify-content-between align-items-center">
                <!-- Checkbox -->
                <div class="form-check mb-0">
                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                <label class="form-check-label">
                    정보기억하기
                </label>
                </div>
                <a href="#!" id="find-pw">비밀번호 찾기</a>
                <router-link to="/SignUpPage" id="sign-up">회원가입</router-link>
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
                <button id ="login-button" type="button" class="btn btn-primary btn-lg" @click="tryLogin">로그인</button>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {

    data(){
        return{
            isLoggedin: false
        }
    },

    methods: {
        tryLogin(){
            let id = document.getElementById("userId");
            let password = document.getElementById("userPw");
            
            fetch("http://ec2-13-125-74-101.ap-northeast-2.compute.amazonaws.com:3000/users/login", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: id.value,
                    password: password.value,
                }),
                })
            
            
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.isLoggedin = data["status"];
                if(this.isLoggedin){    
                    this.$router.push('/')
                }
                else{
                    alert("아이디 또는 비밀번호가 틀립니다.");
                }
            });
        },
        }
}
</script>

<style scoped>
.container{
    margin-top: 100px;
    background-color: #f7e4b2;
}

#userId{
    margin-top: 150px;
}

#login-button{
    padding-left: 2.5rem; 
    padding-right: 2.5rem;
    margin-bottom: 150px;
}
</style>