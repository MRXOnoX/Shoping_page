var email = document.querySelector(".email");
var secret = document.querySelector(".secret");
var password = document.querySelector(".password");
var newpassword = document.querySelector(".newpassword");
var save = document.querySelector(".save");
var arr = JSON.parse(localStorage.getItem("personarr")) || [];
save.addEventListener("click", function(){
    var success =  arr.findIndex(i=> i.email == email.value && i.secret == secret.value && password.value == newpassword.value)
    console.log(success)
    if(success>-1){
         arr[success].password = password.value
         localStorage.setItem("personarr",JSON.stringify(arr))
    }
    else{
        alert("false")
    }
})