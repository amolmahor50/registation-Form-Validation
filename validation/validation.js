

function validation(){
    // fill your name
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let confPass = document.getElementById("conf-pass").value;
    
    // name validation
    if(name == ""){
        document.getElementById("name-msg").innerHTML = " Please Fill Your name.";
        return false;
    }
    if(name.length <= 2 || (name.length > 20)){
        document.getElementById("name-msg").innerHTML = " Your name must be 2 and 20 lenght.";
        return false;
    }
    if(!isNaN(name)){
        document.getElementById("name-msg").innerHTML = "Only character are allowed.";
        return false;
    }
    // gmail validation
    if(email == ""){
        document.getElementById("email-msg").innerHTML = " Please Fill Your email id.";
        return false;
    }
    if(email.indexOf('@') <= 0){
        document.getElementById("email-msg").innerHTML = "@ Invalid Position.";
        return false;
    }
    if((email.charAt(email.length-4) != '.') && (email.charAt(email.length-3) != '.')){
        document.getElementById("email-msg").innerHTML = " ( . ) Invalid Position.";
        return false;
    }

     // password validation
    if(pass == ""){
        document.getElementById("pass-msg").innerHTML = " Please Fill Your password.";
        return false;
    }
    if(confPass == ""){
        document.getElementById("conf-msg").innerHTML = " Please Fill your confirm password.";
        return false;
    }
    if(pass.length <= 5 || (pass.length >= 8)){
        document.getElementById("pass-msg").innerHTML = "Your password must be 5 and 20 lenght..";
        return false;
    }
}


let show = document.getElementById("show");
let hide = document.getElementById("hide");
let x = document.getElementById("password");

// password hide / show 

show.addEventListener("click", function () {

    if (x.type == "password") {
        x.type = "text";
        show.style.display = "none";
        hide.style.display = "block";
    }
})
hide.addEventListener("click", function () {

    if (x.type == "text") {
        x.type = "password";
        show.style.display = "block";
        hide.style.display = "none"
    }
})

let show1 = document.getElementById("show1");
let hide1 = document.getElementById("hide1");
let y = document.getElementById("conf-pass");

// password hide / show 

show1.addEventListener("click", function () {

    if (y.type == "password") {
        y.type = "text";
        show1.style.display = "none";
        hide1.style.display = "block";
    }
})
hide1.addEventListener("click", function () {

    if (y.type == "text") {
        y.type = "password";
        show1.style.display = "block";
        hide1.style.display = "none"
    }
})

//validation

let listTag = document.querySelectorAll("li");

const required = [
    { regex : /.{8,}/},
    { regex : /[0-9]/},
    { regex : /[A-Z]/},
    { regex : /[a-z]/},
    { regex : /[^A-Za-z0-9]/}
]

x.addEventListener("keyup", ()=>{
    required.forEach((item, i) =>{
        let isValid = item.regex.test(x.value);

        if(isValid){
            listTag[i].style.color = "green";
            listTag[i].style.fontWeight = "700";
        }
        else{
            listTag[i].style.color = "#555";
            listTag[i].style.fontWeight = "100";
        }
    })
})


function checkedPass(){
    let x = document.getElementById("password").value;
    let y = document.getElementById("conf-pass").value;
    let message = document.getElementById("pass-match");

   if((x.length != 0) && (y.length != 0)){
        if(x == y){
            message.innerHTML = "Password Match...";
            message.style.backgroundColor = "#3ae374";
            message.style.color ="#000";
            message.style.padding = "8px 15px";
        }
        else{
            message.innerHTML = "Password Don't Match...";
            message.style.backgroundColor = "#ff4d4d";
            message.style.color ="#fff";
            message.style.padding = "8px 15px";
        }
   }   
}