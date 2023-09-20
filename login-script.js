
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const FullName = loginForm.FullName.value;
    const MobileNumber = loginForm.MobileNumber.value;
    const EmailId = loginForm.EmailId.value;
    const Address = loginForm.Address.value;
    const password = loginForm.password.value;

    if (FullName === "appu" && password === "appu"&&MobileNumber==="9704103500"&&EmailId==="apuroop970@gmail.com"&&Address==="pdrl") {
        alert("You have successfully logged in.");
        location.href="index.html"
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})