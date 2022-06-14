<template>
    <div class="container">
        <img src="../assets/tattoo.png" class="rounded mx-auto d-block w-25" alt="상품이미지"> 
        <div class="row">
            <h3 class="col-sm-offset-3 col-sm-6">회원가입</h3>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <div class="row">
                    <div class="col-xs-6 col-md-6">
                        <input type="text" name="firstname" id="firstname" class="form-control input-lg" placeholder="성"/>
                    </div>
                    <div class="col-xs-6 col-md-6">
                        <input type="text" name="lastname" id="lastname" class="form-control input-lg" placeholder="이름"/>
                    </div>
                </div>

                <div class="row">
                    <div class="col-9">
                        <input type="text" name="id" id="id" class="form-control input-lg" placeholder="아이디 (영문자+숫자 조합 6~16자리)"/>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-block btn-primary" type="button" @click="idCheck">아이디 체크</button>
                    </div>
                </div>

                <input type="password" name="password" id="password" class="form-control input-lg" placeholder="비밀번호 (영문자+숫자+특수문자 조합 6~16자리)"/>
                <input type="password" name="confirm_password" id="confirm_password" class="form-control input-lg" placeholder="비밀번호 확인"/>
                <input type="tel" name="phone" id="phone" class="form-control input-lg" placeholder="핸드폰번호 (-없이 숫자만 입력)"/>
                
                
                <div class="row">
                    <div class="col-4">
                        <input type="text" name="email_id" id="email_id" class="form-control input-lg" placeholder="이메일"/>
                    </div>
                    <div class="col">
                        <label>@</label>
                    </div>
                    <div class="col-4">
                        <input type="text" name="email_address" id="email_address" class="form-control input-lg"/>
                    </div>
                    <div class="col-3">
                        <select name="email_selected" id="email_selected" class="form-control input-lg" @change="changeEmailAddress">
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
                        <input type="text" id="postcode" name="postcode" value="" class="form-control input-lg" placeholder="우편번호" disabled>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-block btn-primary" type="button" @click="searchAddress">우편번호 찾기</button>
                    </div>
                </div>

                <input type="text" id="address" class="form-control input-lg" placeholder="주소" disabled>
                <input type="text" id="detailAddress" class="form-control input-lg" placeholder="상세주소">

                <label>생년월일</label>
                <div class="row">
                    <div class="col-xs-4 col-md-4">
                        <select name="year" id="year" class = "form-control input-lg">
                            <option v-for="yearValue in 100" :key="2022 - yearValue">{{ 2022 - yearValue }}년</option>
                        </select>
                    </div>
                    <div class="col-xs-4 col-md-4">
                        <select name="month" id="month" class = "form-control input-lg" @change="setMaxDay">
                            <option v-for="monthValue in 12" :key="monthValue">{{ monthValue }}월</option>
                        </select>
                    </div>
                    <div class="col-xs-4 col-md-4">
                        <select name="day" id="day" class = "form-control input-lg">
                            <option v-for="dayValue in maxDay" :key="dayValue">{{ dayValue }}일</option>
                        </select>                    
                    </div>
                </div>
                <div id="gender-pick">
                    <label>성별 :</label>
                    <label class="radio-inline">
                        <input type="radio" name="gender" value="M" id="male" />남
                    </label>
                    <label class="radio-inline">
                        <input type="radio" name="gender" value="F" id="female" />여
                    </label>
                </div>
                <br/><br/><br/>
                <button class="btn btn-lg btn-primary btn-block" type="button" @click="checkValidation">회원가입</button>
                <br/><br/><br/>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            maxDay: 31
        }
    },
    
    methods: {
    checkValidation(){
        let idRegexForm = /^[0-9a-zA-Z]{6,16}$/;
        let passwordRegexForm = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*_+=-])(?=.*[0-9]).{6,16}$/;
        let phoneRegexFrom = /^(01[0|1|6|7|8|9]|02|03[1-3]|04[1-4]|05[1-5]|06[1-4])([0-9]{3,4})([0-9]{4})$/;

        let firstname = document.getElementById("firstname");
        let lastname = document.getElementById("lastname");
        let id = document.getElementById("id");
        let password = document.getElementById("password");
        let confirm_password = document.getElementById("confirm_password");
        let phone = document.getElementById("phone");
        let email_id = document.getElementById("email_id");
        let email_address = document.getElementById("email_address");
        let postcode = document.getElementById("postcode");
        let address = document.getElementById("address");
        let male = document.getElementById("male");
        let female = document.getElementById("female");

        if (firstname.value == ""){
            alert("성을 입력해주세요");
            firstname.focus();
            return false;
        }

        if (lastname.value == ""){
            alert("이름을 입력해주세요");
            lastname.focus();
            return false;
        }

        if (id.value == ""){
            alert("아이디를 입력해주세요");
            id.focus();
            return false;
        }

        if(!idRegexForm.test(id.value)){
            alert("아이디를 영문자+숫자 조합으로 6~16자리로 입력해주세요");
            id.focus();
            return false;
        }

        if (password.value == ""){
            alert("비밀번호를 입력해주세요");
            password.focus();
            return false;
        }

        if (!passwordRegexForm.test(password.value)){
            alert("비밀번호를 영문자+숫자+특수문자 조합으로 6~16자리로 입력해주세요");
            password.focus();
            return false;
        }

        if (confirm_password.value !== password.value)
        {
            alert("비밀번호가 일치하지 않습니다");
            confirm_password.focus();
            return false;
        }

        if (!phoneRegexFrom.test(phone.value)){
            alert("핸드폰번호를 형식에 맞게 입력해주세요");
            phone.focus();
            return false
        }

        if (email_id.value == ""){
            alert("이메일을 입력해주세요");
            email_id.focus();
            return false;
        }

        if (email_address.value == ""){
            alert("이메일 주소를 입력해주세요");
            email_address.focus();
            return false;
        }

        if (postcode.value == "" && address.value == ""){
            alert("주소를 입력해주세요");
            address.focus();
            return false;
        }

        if (!male.checked && !female.checked){
            alert("성별을 체크해주세요");
            male.focus();
            return false;
        }
        this.sendData();
    },

    idCheck(){
        let idRegexForm = /^[0-9a-zA-Z]{6,16}$/;
        let id = document.getElementById("id");
        if (id.value == ""){
            alert("아이디 입력후에 체크해주세요");
        }
        else if (idRegexForm.test(id.value)){
            alert("사용가능한 아이디 입니다");
        }
        else{
            alert("사용불가능한 아이디 입니다");
            id.value = "";
            id.focus();
        }
    },

    changeEmailAddress(){
        let email_address = document.getElementById("email_address");
        let email_selected = document.getElementById("email_selected");

        let selectedIndex = email_selected.options.selectedIndex;
        let selectedEmailAddress = email_selected.options[selectedIndex].value;

        email_address.value = selectedEmailAddress;
    },

    setMaxDay() {
        let box = document.getElementById('month');
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

    sendData(){
    let firstname = document.getElementById("firstname");
    let lastname = document.getElementById("lastname");
    let id = document.getElementById("id");
    let password = document.getElementById("password");
    let phone = document.getElementById("phone");
    let email_id = document.getElementById("email_id");
    let email_address = document.getElementById("email_address");
    let address = document.getElementById("address");
    let detailAddress = document.getElementById("detailAddress")
    let year = document.getElementById("year")
    let month = document.getElementById("month")
    let day = document.getElementById("day")
    let male = document.getElementById("male");
    let female = document.getElementById("female");
    let gender;

    if (male.checked){
        gender = male.value;
    }
    else{
        gender = female.value;
    }
    
    fetch("http://ec2-13-125-74-101.ap-northeast-2.compute.amazonaws.com:3000/users/register", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        name: firstname.value + lastname.value,
        user_id: id.value,
        password: password.value,
        phone: phone.value,
        address: address.value + " " + detailAddress.value,
        gender: gender,
        email: email_id.value + "@" + email_address.value,
        birth: year.value + month.value + day.value
    }),
    })

    .then((response) => response.json())
    .then((data) => console.log(data));
    },

    }
}
</script>

<style scoped>
.container{
    background-color: #ecfbcc;
}

.col-sm-6{
    margin-left: 310px; 
    padding-top: 20px;
}

.form-control { 
    margin-bottom: 20px; 
}

.radio-inline{
    padding-left: 10px;
}

</style>