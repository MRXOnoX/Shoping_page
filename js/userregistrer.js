var email = document.getElementById('email');
var name = document.getElementById('name');
var password = document.getElementById('password');
var save = document.getElementById('Register');
var arr = JSON.parse(localStorage.getItem("personarr")) || [];
save.addEventListener("click", function(){

   var reuser = arr.findIndex(i=> i.email == email.value);
  if(reuser == -1 && password.value == reppasswrod.value){
    var tmp = {
        email:email.value,
        password:password.value,
       
    
    }
    arr.push(tmp);
    localStorage.setItem("personarr",JSON.stringify(arr));
  }
  else{
      console.log("username already exists");
  }
   console.log(arr);
})

