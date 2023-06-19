function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username.length && password.length != 0){
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("Your details are saved. Now you can use your credentials to login.")
    }
    else{
        alert("User Id/Password can't be empty! Please enter your User Id/Password.");
    }
}



var attempt = 3;
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
const username1=localStorage.getItem("username");
const password1=localStorage.getItem("password");
if(username.length && password.length != 0){
    if( username == username1 && password == password1){
alert ("Login successfully! You are entering in bytesbuddy");
window.location = "main.html";
return false;
}
    else{
alert ("Invalid User Id/Password");
attempt -- ;
alert("Only "+attempt+" attempt(s) are left");
        if(attempt==0){
            alert("You have reached maximum number of attempts.");
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
        }
return false;
}
}
else{
    alert("User Id/Password can't be empty! Please enter your User Id/Password.");
}
}