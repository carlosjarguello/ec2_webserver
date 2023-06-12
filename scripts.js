const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value; 

    if (username === "agudelo.nat" && password === "ojos2023") {
        alert("You have successfully logged in.");
        window.location = "Files";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
