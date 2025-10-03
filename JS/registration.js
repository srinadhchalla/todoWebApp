let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmpassword");
let registerbtn = document.getElementById("submitBtn");
let checkbox = document.getElementById("showPassword");
let error = document.getElementById("statusMsg");
let instructions = document.getElementById("instructions");
let instructionsContainer = document.getElementById("instructionsCon");



/*--------- handling the blur event for each input field ---------*/


firstName.addEventListener("blur", function() {
    error.style.display = "block"
    instructionsContainer.style.top = "25.5rem";
    let firstNameValue = firstName.value;
    error.style.color = "red";  
    if (firstNameValue === ""){
        error.textContent = "Firstname cannot be empty";        
    }
    else {
        error.textContent = "";
    }   
});

lastName.addEventListener("blur", function() {
    error.style.display = "block"
    instructionsContainer.style.top = "25.5rem";
    let lastNameValue = lastName.value;
    error.style.color = "red";
    if (lastNameValue === ""){
        error.textContent = "Lastname cannot be empty";        
    }   
    else {
        error.textContent = "";
    }
});

email.addEventListener("blur", function() {
    let emailText = document.getElementById("emailText")
    error.style.display = "block"
    instructionsContainer.style.top = "25.5rem";
    let emailValue = email.value;
    error.style.color = "red";
    if (emailValue === ""){
        error.textContent = "Email cannot be empty";
    }
    else if(!emailValue.includes("@") || !emailValue.includes(".")){
        error.textContent = "Enter Valid Email Id!"
        emailText.style.top =  "30px";
        emailText.style.fontSize =  "0.7em" ;
        emailText.style.fontWeight =  "600";
    }
    else {
         emailText.style.top =  "30px";
        emailText.style.fontSize =  "0.7em" ;
        emailText.style.fontWeight =  "600";
        error.textContent = "";
    }
});

function passwordValidifier(password) {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

password.addEventListener("blur", function() {
    let passwordvalue = password.value;
    error.style.display = "block"
    instructionsContainer.style.top = "25.5rem";
    error.style.color = "red";
    if (passwordvalue === ""){
        error.textContent = "password cannot be empty";
        
    }
    else if(!passwordValidifier(passwordvalue)) {
        error.textContent = "Password is not valid! See instuctions";
        instructions.style.backgroundColor = "red";
    } else{
    error.textContent = "";
    instructions.style.backgroundColor = "green";
    }
})


instructions.addEventListener("mouseover" ,() => {
    instructionsContainer.style.display = "block";
})

instructions.addEventListener("mouseout" ,() => {
    instructionsContainer.style.display = "none";
})

checkbox.addEventListener('change', function() {
    if (this.checked) {
        password.type = "text"; 
        confirmPassword.type = "text";
    } else {
        password.type = "password"; 
        confirmPassword.type = "password";
    }   
});

/*--------- submit event  storing the data in locally ---------*/

registerbtn.addEventListener('click', function(e) {
    
    error.style.display="block"
    instructionsContainer.style.top = "25.5rem";
    e.preventDefault();
    
    if (firstName.value === "" || lastName.value === "" || email.value === "" || password.value === "" || confirmPassword.value === "") {
        error.textContent = "Fill All Required Fields!";
        return;
    } 
    if (password.value !== confirmPassword.value) {
       error.textContent = "Passwords Do Not Match!";
       alert("password & confirm password should be same");
        return;
    } 
    error.style.color = "green";
    
    // Here you can add code to submit the form or save the data
    
    let name = localStorage.getItem("firstName");
    let lastname = localStorage.getItem("lastName");
    let useremail = localStorage.getItem("emailId");
    console.log(name, lastname, useremail);

    if (name === firstName.value && lastname === lastName.value && useremail === email.value) {
        error.textContent = "User Already Registered!";
        error.style.color = "red";
        alert("User Already Registered! Kindly Login");
        return;
    }

    let user = firstName.value;
    let surName = lastName.value;
    let emailId = email.value;
    let passwordKey = confirmPassword.value

    localStorage.setItem("firstName", user);
    localStorage.setItem("lastName", surName);
    localStorage.setItem("emailId", emailId);
    localStorage.setItem("Password", passwordKey);
    

    alert("Registration successful!");
    error.textContent = "Registration Successful!";
    error.style.color = "green";
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";


});

//playground


