'use strict';


let username = prompt("Please Enter User Name ?");
userNameValidate(username);
function userNameValidate(username) {
    while (username == null || username != "admin") {
        username = prompt("Please Enter Correct User Name ?");        
    }
}

let password = prompt("Please Enter Password ?");
PasswordValidate(password);
// Password validation

function PasswordValidate(password) {
    while (password == null || password != "admin") {
        password = prompt("Please Enter Correct Password ?");
    }
    alert("welcome to admin control page ..! ");
}

