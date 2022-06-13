<template>
    <div class="container">
        <img src="../assets/tattoo.png" class="rounded mx-auto d-block w-25" alt="상품이미지"> 
        <div class="row">
            <h3 class="col-sm-offset-3 col-sm-6">회원가입</h3>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <form action="" method="post" accept-charset="utf-8" class="form" role="form">
                    <div class="row">
                        <div class="col-xs-6 col-md-6">
                            <input type="text" name="firstname" value="" class="form-control input-lg" placeholder="성"/>
                        </div>
                        <div class="col-xs-6 col-md-6">
                            <input type="text" name="lastname" value="" class="form-control input-lg" placeholder="이름"/>
                        </div>
                    </div>
                    <input type="text" name="id" value="" class="form-control input-lg" placeholder="아이디"/>
                    <input type="password" name="password" value="" class="form-control input-lg" placeholder="비밀번호"/>
                    <input type="password" name="confirm_password" value="" class="form-control input-lg" placeholder="비밀번호 확인"/>
                    <input type="email" name="email" value="" class="form-control input-lg" placeholder="이메일"/>

                    <div class="row">
                        <div class="col">
                            <input type="text" id="postcode" name="postcode" value="" class="form-control input-lg" placeholder="우편번호">
                        </div>
                        <div class="col">
                            <input type="button" @click="search" value="우편번호 찾기">
                        </div>
                    </div>

                    <input type="text" id="address" class="form-control input-lg" placeholder="주소">
                    <input type="text" id="detailAddress" class="form-control input-lg" placeholder="상세주소">

                    <label>생년월일</label>
                    <div class="row">
                        <div class="col-xs-4 col-md-4">
                            <select name="year" class = "form-control input-lg">
                                <option v-for="yearValue in 100" :key="2022 - yearValue" value=key>{{ 2022 - yearValue }}년</option>
                            </select>
                        </div>
                        <div class="col-xs-4 col-md-4">
                            <select id = "month" name="month" class = "form-control input-lg" @change="setMaxDay">
                                <option v-for="monthValue in 12" :key="monthValue" value=monthValue>{{ monthValue }}월</option>
                            </select>
                        </div>
                        <div class="col-xs-4 col-md-4">
                            <select name="day" class = "form-control input-lg">
                                <option v-for="dayValue in maxDay" :key="dayValue" value=dayValue>{{ dayValue }}일</option>
                            </select>                    
                        </div>
                    </div>
                    <div id="gender-pick">
                        <label>성별 :</label>
                        <label class="radio-inline">
                            <input type="radio" name="gender" value="M" id=male />남
                        </label>
                        <label class="radio-inline">
                            <input type="radio" name="gender" value="F" id=female />여
                        </label>
                    </div>
                    <br/><br/><br/>
                    <button class="btn btn-lg btn-primary btn-block signup-btn" type="submit">회원가입</button>
                    <br/><br/><br/>
                </form>          
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
    search() {
        new window.daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
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
    }
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

.signup-btn {
  background-image: linear-gradient(to bottom, #79bc64, #578843);
}

.signup-btn:hover {
  background-image: linear-gradient(to bottom, #79bc64, #5e7056);
}

.form .form-control { 
    margin-bottom: 20px; 
}

.radio-inline{
    padding-left: 10px;
}

</style>