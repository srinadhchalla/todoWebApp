let EmailInputEle = document.getElementById("email");
let PasswordInputEle = document.getElementById("password");
let LoginBtnEle = document.getElementById("loginBtn");
let error = document.getElementById("error");

 

let passwordValidifier = function(password) {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

EmailInputEle.addEventListener("blur", function() {
    let email = EmailInputEle.value;
    error.style.display = "block";
    if (email === ""){
        error.style.color = "red"
        error.textContent = "Email cannot be empty";
        
    } else{
    error.textContent = "";
    }
})
PasswordInputEle.addEventListener("blur", function() {
     console.log("triggered")
    let password = PasswordInputEle.value;
    error.style.display = "block";
    if (password === ""){
        error.style.color = "red"
        error.textContent = "password cannot be empty";
        
    } else{
    error.textContent = "";
    instuctions.style.backgroundColor = "green";
    }
})

LoginBtnEle.addEventListener("click", function(event) {
    event.preventDefault();
    let email = EmailInputEle.value;
    let password = PasswordInputEle.value;  
    if (email === "") {
        error.style.display = "block";
        error.textContent = "Email cannot be empty";

    } else if(password ===""){
        error.style.display = "block";
        error.textContent = "Password cannot be empty";

    }else if(email === "" || password === "") {
        error.style.display = "block";
        error.textContent = "Email and Password cannot be empty";
    }
    else{
        let storedEmail = localStorage.getItem("emailId");
        let storedPassword = localStorage.getItem("Password");
        console.log(storedEmail, storedPassword)
        if (email === storedEmail && password === storedPassword) {
            error.style.display = "none";
            error.style.color = "green";
            error.textContent = "Login successful!";
            localStorage.setItem("loginStatus", "true")
            window.location.href = "TodosPage.html";
        } else {
            error.style.display = "block";
            error.style.color = "red";
            
            error.textContent = "Invalid email or password";
        }
    }
});

let NewUser = document.getElementById("NewUser");

NewUser.addEventListener("click", function() {
    window.location.href = "registration.html";
});

