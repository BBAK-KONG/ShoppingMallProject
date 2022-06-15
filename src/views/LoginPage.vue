<template>
    <div class="container">
        <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
            <img src="../assets/tattoo.png"
            class="img-fluid" alt="Sample image">
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <!-- id input -->
            <div class="form-outline mb-4">
                <input type="email" id="userId" class="form-control form-control-lg"
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
                <a href="http://localhost:8080/SignUpPage" id="sign-up">회원가입</a>
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
                <button id ="login-button" type="button" class="btn btn-primary btn-lg" @click="getData">로그인</button>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {

    data(){
        return{
            userData: ""
        }
    },

    methods: {
        getData(){
            fetch("http://ec2-13-125-74-101.ap-northeast-2.compute.amazonaws.com:3000/users", {
                method: 'GET',
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.userData = data;
                console.log(this.userData);
            });
        },
        }
}
</script>

<style scoped>
.container{
    margin-top: 100px;
    background-color: #ecfbcc;
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