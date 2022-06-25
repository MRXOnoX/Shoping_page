var email = document.querySelector(".email");
var password = document.querySelector(".password");
var login = document.querySelector(".login");
var arr = JSON.parse(localStorage.getItem("personarr")) || [];
login.addEventListener("click",function(){
  var success =  arr.findIndex(i=> i.email == email.value && i.password == password.value)
  if(success>-1){
      alert("true")
  }
  else{
      alert("false")
  }
})