<template>
 <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto loginbox">
    <div class="card card0 border-0">
        <div class="row d-flex">
            <div class="col-lg-6">
                <div class="card1 pb-5  text-center">
                    <h3 class="textlogin">Sign Up to Your Account</h3>
                    <div class="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="@/assets/img/Loginhome.png" class="image"> </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card2 card border-0 px-4 py-5">
                    <div class="row mb-4 px-3">
                        <h6 class="mb-0 mr-4 mt-2">Sign Up with</h6>
                        <div class="facebook text-center mr-3">
                            <div class="fa fa-facebook"></div>
                        </div>
                        <div class="google text-center mr-3">
                            <div class="fa fa-google"></div>
                        </div>
                        <div class="twitter text-center mr-3">
                            <div class="fa fa-twitter"></div>
                        </div>
                    </div>
                    <div class="row px-3 mb-4">
                        <div class="line"></div> <small class="or text-center">Or</small>
                        <div class="line"></div>
                    </div>
                     <div class="row px-3"> <label class="mb-1">
                            <h6 class="mb-0 text-sm">Full Name:-</h6>
                        </label> <input class="mb-4" type="text" name="text" placeholder="Enter a valid email address"> 
                    </div>
                    <div class="row px-3"> <label class="mb-1">
                            <h6 class="mb-0 text-sm">Email</h6>
                        </label> <input class="mb-4" type="text" name="email" placeholder="Enter a valid email address"> 
                    </div>
                    <div class="row px-3"> <label class="mb-1">
                            <h6 class="mb-0 text-sm">Password:-</h6>
                        </label> <input type="password" name="password" placeholder="Enter password">
                    </div><br>
                     <div class="row px-3"> <label class="mb-1">
                            <h6 class="mb-0 text-sm">Confirm Password:-</h6>
                        </label> <input class="mb-4" type="text" name="email" placeholder="Enter a valid email address"> 
                    </div>
                    <div class="row px-3 mb-4 checkboxlogin">
                        <div class="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" class="custom-control-input"> <label for="chk1" class="custom-control-label text-sm">Remember me</label> </div> <a href="#" class="ml-auto mb-0 text-sm">Forgot Password?</a>
                    </div>
                    <div class="row mb-3 px-3"> <button type="submit" class="btn btn-blue text-center loginbutton">Sign up</button> </div>
                    <div class="row mb-4 px-3"> <small class="font-weight-bold">already you have an account?<router-link to="/pages/login"><a class="text-danger "> Login</a></router-link></small> </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style>

html, body{
  height: 100%;
}

body {
    color: #000;
    overflow-x: hidden;
    height: 100%;
    background-color: #B0BEC5;
    background-repeat: no-repeat
}
.loginbox{
    width: 100%;
    max-width: 1130px;
}
.card0 {
    box-shadow: 0px 4px 8px 0px #757575;
    border-radius: 0px
}
.card1{
    padding: 50px 15px 0px 13px;
}
.card2 {
    margin: 0px 40px
}
.textlogin{
    color: #57616b;
    padding:7px 0 30px 0; 
}
.image {
    width: 360px;
    height: 280px
}

.border-line {
    border-right: 1px solid #EEEEEE
}

.facebook {
    background-color: #3b5998;
    color: #fff;
    font-size: 18px;
    padding-top: 5px;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    cursor: pointer
}

.twitter {
    background-color: #1DA1F2;
    color: #fff;
    font-size: 18px;
    padding-top: 5px;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    cursor: pointer
}

.google {
    background-color: #fd0e0e;
    color: #fff;
    font-size: 18px;
    padding-top: 5px;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    cursor: pointer
}

.linkedin {
    background-color: #2867B2;
    color: #fff;
    font-size: 18px;
    padding-top: 5px;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    cursor: pointer
}

.line {
    height: 1px;
    width: 45%;
    background-color: #E0E0E0;
    margin-top: 10px
}

.or {
    width: 10%;
    font-weight: bold
}

.text-sm {
    font-size: 14px !important
}

::placeholder {
    color: #BDBDBD;
    opacity: 1;
    font-weight: 300
}

:-ms-input-placeholder {
    color: #BDBDBD;
    font-weight: 300
}

::-ms-input-placeholder {
    color: #BDBDBD;
    font-weight: 300
}

input,
textarea {
    padding: 10px 12px 10px 12px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    margin-bottom: 5px;
    margin-top: 2px;
    width: 100%;
    box-sizing: border-box;
    color: #2C3E50;
    font-size: 14px;
    letter-spacing: 1px
}

input:focus,
textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid #304FFE;
    outline-width: 0
}

button:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline-width: 0
}

a {
    color: inherit;
    cursor: pointer
}

.btn-blue {
    background-color: #1A237E;
    width: 150px;
    color: #fff;
    border-radius: 2px
}

.btn-blue:hover {
    background-color: #000;
    cursor: pointer
}

.bg-blue {
    color: #fff;
    background-color: #1A237E
}
#app {
    display: table;
    width: 100%;
    min-height: 100%;
}
#app > div{
  display: table-cell;
    vertical-align: middle;
}
.card {
    max-width: 950px;
    margin: 0 auto;
}

@media screen and (max-width: 991px) {
    .image {
        width: 300px;
        height: 220px
    }

    .border-line {
        border-right: none
    }

    .card2 {
        border-top: 1px solid #EEEEEE !important;
        margin: 0px 15px
    }
}
.loginbox .loginbutton {
    background: #0101ff;
    color:white;
    font-weight: 600;
}
.checkboxlogin{
    padding:20px 0px 0px 0px;
}
</style>
