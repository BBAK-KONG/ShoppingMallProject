<template>
    <div class="container">
        <img src='http://ec2-13-125-74-101.ap-northeast-2.compute.amazonaws.com:3000/images/tattoo.png' class="rounded mx-auto d-block w-25" alt="상품이미지">
        <div class="row">
            <h3 class="col-sm-offset-3 col-sm-6">회원가입</h3>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <div class="row">
                    <div class="col-xs-6 col-md-6">
                        <input type="text" name="firstname" ref="firstname" class="form-control input-lg" placeholder="성"/>
                    </div>
                    <div class="col-xs-6 col-md-6">
                        <input type="text" name="lastname" ref="lastname" class="form-control input-lg" placeholder="이름"/>
                    </div>
                    <span ref="nameCheck"> </span>
                </div>

                <div class="row">
                    <div class="col-9">
                        <input type="text" name="id" ref="id" @change="checkRegexId" class="form-control input-lg" placeholder="아이디 (영문자+숫자 조합 6~16자리)"/>
                    </div>
                    <div id="checkButton" class="col-3">
                        <button class="btn btn-block btn-primary" type="button" @click="idCheck">아이디 체크</button>
                    </div>
                </div>

                <span ref="idCheck"> </span>

                <input type="password" name="password" ref="password" @change="checkRegexPw" class="form-control input-lg" placeholder="비밀번호 (영문자+숫자+특수문자 조합 6~16자리)"/>
                <span ref="pwCheck"> </span>
                <input type="password" name="confirm_password" ref="confirm_password" @change="checkConfirmPw" class="form-control input-lg" placeholder="비밀번호 확인"/>
                <span ref="confirmPwCheck"> </span>
                <input type="tel" name="phone" ref="phone" @change="checkPhone" class="form-control input-lg" placeholder="핸드폰번호 (-없이 숫자만 입력)"/>
                <span ref="phoneCheck"> </span>
                
                
                <div class="row">
                    <div class="col-4">
                        <input type="text" name="email_id" ref="email_id" class="form-control input-lg" placeholder="이메일"/>
                    </div>
                    <div class="col" id="at">
                        <label>@</label>
                    </div>
                    <div class="col-4">
                        <input type="text" name="email_address" ref="email_address" class="form-control input-lg"/>
                    </div>
                    <div class="col-3">
                        <select name="email_selected" ref="email_selected" class="form-control input-lg" @change="changeEmailAddress">
                            <option value="">직접입력</option> 
                            <option value="naver.com">naver.com</option>
                            <option value="gmail.com">gmail.com</option>
                            <option value="daum.net">daum.net</option>
                            <option value="nate.com">nate.com</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="col-9">
                        <input type="text" ref="postcode" id="postcode" name="postcode" value="" class="form-control input-lg" placeholder="우편번호" disabled>
                    </div>
                    <div class="col-3">
                        <button id="searchButton" class="btn btn-block btn-primary" type="button" @click="searchAddress">우편번호 찾기</button>
                    </div>
                </div>

                <input type="text" ref="address" id="address" class="form-control input-lg" placeholder="주소" disabled>
                <input type="text" ref="detailAddress" id="detailAddress" class="form-control input-lg" placeholder="상세주소">

                <label id="birthLabel">생년월일</label>
                <div class="row" id="birthRow">
                    <div class="col-xs-4 col-md-4">
                        <select name="year" ref="year" class = "form-control input-lg">
                            <option v-for="yearValue in 100" :key="2022 - yearValue">{{ 2022 - yearValue }}년</option>
                        </select>
                    </div>
                    <div class="col-xs-4 col-md-4">
                        <select name="month" ref="month" class = "form-control input-lg" @change="setMaxDay">
                            <option v-for="monthValue in 12" :key="monthValue">{{ monthValue }}월</option>
                        </select>
                    </div>
                    <div class="col-xs-4 col-md-4">
                        <select name="day" ref="day" class = "form-control input-lg">
                            <option v-for="dayValue in maxDay" :key="dayValue">{{ dayValue }}일</option>
                        </select>                    
                    </div>
                </div>
                <div id="gender-pick">
                    <label>성별 :</label>
                    <label class="radio-inline">
                        <input type="radio" name="gender" value="M" ref="male" />남
                    </label>
                    <label class="radio-inline">
                        <input type="radio" name="gender" value="F" ref="female" />여
                    </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block" id="signUpButton" type="button" @click="sendData">회원가입</button>
            </div>
        </div>
    </div>
    
</template>

<script>    
export default {
    data(){
        return{
            maxDay: 31,
            isIdCheck: false
        }
    },
    
    methods: {

    checkRegexId(){
        let idRegexForm = /^[0-9a-zA-Z]{6,16}$/;
        if(!idRegexForm.test(this.$refs.id.value) && this.$refs.id.value !== ""){
            this.$refs.idCheck.innerHTML = "아이디를 영문자+숫자 조합으로 6~16자리로 입력해주세요";
            this.$refs.id.focus();
            return false;
        }
        this.$refs.idCheck.innerHTML = " ";
        return true;
    },

    checkRegexPw(){
        let passwordRegexForm = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*_+=-])(?=.*[0-9]).{6,16}$/;
        if(!passwordRegexForm.test(this.$refs.password.value) && this.$refs.password.value !== ""){
            this.$refs.pwCheck.innerHTML = "비밀번호를 영문자+숫자+특수문자 조합으로 6~16자리로 입력해주세요";
            this.$refs.password.focus();
            return false;
        }
        this.$refs.pwCheck.innerHTML = " ";
        return true;
    },

    checkConfirmPw(){
        if (this.$refs.confirm_password.value !== this.$refs.password.value)
        {
            this.$refs.confirmPwCheck.innerHTML = "비밀번호가 일치하지 않습니다";
            this.$refs.confirm_password.focus();
            return false;
        }
        this.$refs.confirmPwCheck.innerHTML = " ";
        return true;

    },

    checkPhone(){
        let phoneRegexForm = /^(01[0|1|6|7|8|9]|02|03[1-3]|04[1-4]|05[1-5]|06[1-4])([0-9]{3,4})([0-9]{4})$/;
        if(!phoneRegexForm.test(this.$refs.phone.value) && this.$refs.phone.value !== ""){
            this.$refs.phoneCheck.innerHTML = "올바른 번호를 입력해주세요";
            this.$refs.phone.focus();
            return false;
        }
        this.$refs.phoneCheck.innerHTML = " ";
        return true;
    },

    isAllDataValidation(){
        let idRegexForm = /^[0-9a-zA-Z]{6,16}$/;
        let passwordRegexForm = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*_+=-])(?=.*[0-9]).{6,16}$/;
        let phoneRegexForm = /^(01[0|1|6|7|8|9]|02|03[1-3]|04[1-4]|05[1-5]|06[1-4])([0-9]{3,4})([0-9]{4})$/;

        if (this.$refs.firstname.value == ""){
            alert("성을 입력해주세요");
            this.$refs.firstname.focus();
            return false;
        }
        if (this.$refs.lastname.value == ""){
            alert("이름을 입력해주세요");
            this.$refs.lastname.focus();
            return false;
        }
        if (this.$refs.id.value == ""){
            alert("아이디를 입력해주세요");
            this.$refs.id.focus();
            return false;
        }
        if (this.$refs.password.value == ""){
            alert("비밀번호를 입력해주세요");
            this.$refs.password.focus();
            return false;
        }
        if (this.$refs.phone.value == ""){
            alert("핸드폰번호를 입력해주세요");
            this.$refs.phone.focus();
            return false;
        }
        if (this.$refs.email_id.value == ""){
            alert("이메일을 입력해주세요");
            this.$refs.email_id.focus();
            return false;
        }
        if (this.$refs.email_address.value == ""){
            alert("이메일 주소를 입력해주세요");
            this.$refs.email_address.focus();
            return false;
        }
        if (this.$refs.postcode.value == "" && this.$refs.address.value == ""){
            alert("주소를 입력해주세요");
            this.$refs.ddress.focus();
            return false;
        }
        if (!this.$refs.male.checked && !this.$refs.female.checked){
            alert("성별을 체크해주세요");
            this.$refs.male.focus();
            return false;
        }

        // 정규식 다시한번 체크하고 alert로 알려주기
        if(!idRegexForm.test(this.$refs.id.value) && this.$refs.id.value !== ""){
            this.$refs.idCheck.innerHTML = "아이디를 영문자+숫자 조합으로 6~16자리로 입력해주세요";
            this.$refs.id.focus();
            return false;
        }
        
        if(!passwordRegexForm.test(this.$refs.password.value) && this.$refs.password.value !== ""){
            alert("비밀번호를 영문자+숫자+특수문자 조합으로 6~16자리로 입력해주세요");
            this.$refs.password.focus();
            return false;
        }

        if (this.$refs.confirm_password.value !== this.$refs.password.value)
        {
            alert("비밀번호가 일치하지 않습니다");
            this.$refs.confirm_password.focus();
            return false;
        }

        if(!phoneRegexForm.test(this.$refs.phone.value) && this.$refs.phone.value !== ""){
            alert("올바른 번호를 입력해주세요");
            this.$refs.phone.focus();
            return false;
        }
        return true;
    },

    sendData(){
    if (!this.isAllDataValidation()){
        return;
    }
    if (!this.isIdCheck){
        alert("아이디체크를 진행해주세요");
        return;
    }
    
    let gender;
    if (this.$refs.male.checked){
        gender = this.$refs.male.value;
    }
    else{
        gender = this.$refs.female.value;
    }
    
    fetch("http://ec2-13-125-74-101.ap-northeast-2.compute.amazonaws.com:3000/users/register", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        name: this.$refs.firstname.value + this.$refs.lastname.value,
        user_id: this.$refs.id.value,
        password: this.$refs.password.value,
        phone: this.$refs.phone.value,
        address: this.$refs.address.value + " " + this.$refs.detailAddress.value,
        gender: gender,
        email: this.$refs.email_id.value + "@" + this.$refs.email_address.value,
        birth: this.$refs.year.value + this.$refs.month.value + this.$refs.day.value
    }),
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
    alert("회원가입이 완료되었습니다!");
    window.location.href = "http://52.79.226.217:8080/LoginPage"
    },

    idCheck(){
        let idRegexForm = /^[0-9a-zA-Z]{6,16}$/;
        if (this.$refs.id.value == ""){
            alert("아이디 입력후에 체크해주세요");
        }
        else if (idRegexForm.test(this.$refs.id.value)){            
            fetch("http://ec2-13-125-74-101.ap-northeast-2.compute.amazonaws.com:3000/users/exist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: this.$refs.id.value,
            }),
            })
            .then((response) => response.json())
            .then((data) => {
                if (data['exist']){
                    alert("이미 사용중인 아이디 입니다.");
                    this.isIdCheck = false;
                    this.$refs.id.value = "";
                    this.$refs.id.focus();
                }
                else{
                    alert("사용가능한 아이디 입니다.");
                    this.isIdCheck = true;
                    this.$refs.password.focus();
                }
            }
            );
        }
        else{
            alert("아이디를 영문자+숫자 조합 6~16자리로 입력해주세요");
            this.$refs.id.value = "";
            this.$refs.id.focus();
        }
    },

    changeEmailAddress(){
        let selectedIndex = this.$refs.email_selected.options.selectedIndex;
        let selectedEmailAddress = this.$refs.email_selected.options[selectedIndex].value;
        this.$refs.email_address.value = selectedEmailAddress;
    },

    setMaxDay() {
        let box = this.$refs.month;
        let selectedMonth = box.options[box.selectedIndex].text;
        switch (selectedMonth)
        {
            case "2월":
                this.maxDay = 28;
                break;  
            case "4월":
            case "6월":
            case "9월":
            case "11월":
                this.maxDay = 30;
                break;
            default:
                this.maxDay = 31;
                break;
        }
    },

    searchAddress() {
        new window.daum.Postcode({
            oncomplete: function(data) {
                var addr = ''; // 주소 변수
                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }
                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('postcode').value = data.zonecode;
                document.getElementById("address").value = addr;
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("detailAddress").focus();
            }
        }).open();
    },
    }
}
</script>


<style scoped>
.container{
    background-color: #ecfbcc;
}

.row{
    text-align: left;
}

.col-sm-6{
    margin-left: 310px; 
}
.form-control { 
    margin-top: 20px; 
}
.radio-inline{
    padding-left: 10px;
}

span{
    color : red
}

#checkButton{
    margin-top: 20px;
}

#searchButton{
    margin-top: 20px;
}

#birthLabel{
    margin-top: 20px;
    font-size: 20px;
}

#gender-pick{
    margin-top: 20px;
    font-size: 20px;
}

#birthRow{
    margin-top: -20px;
}

#at{
    margin-top: 25px;
}

#signUpButton{
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>