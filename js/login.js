'use strict';

//user name prompt
let username = prompt("Please Enter User Name ?");

userNameValidate(username);

function userNameValidate(username) {
    while (username.length < 1 || username == null || username == "" || username !=="admin") {
        let username = prompt("Please Enter User Name ?");
    }
    let password = prompt("Please Enter Password ?");
    PasswordValidate(password);
}


//Password validation
function PasswordValidate(password) {
    while (password.length < 1 || password == null || password == "" || password !== "admin") {
        let password = prompt("Please Enter Password ?");
    }
    alert("welcome to admin control page ..! ");
}

