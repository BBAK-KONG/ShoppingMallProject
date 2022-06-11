<template>
    <div class="container">
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
                    <input type="address" name="address" value="" class="form-control input-lg" placeholder="주소"/>
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
            case "8월":
            case "9월":
            case "11월":
                this.maxDay = 30;
                break;
            default:
                this.maxDay = 31;
                break;
        }
    }
  }
}
</script>

<style>

.container{
    margin-top: 150px;
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