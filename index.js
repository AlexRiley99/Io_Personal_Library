document.addEventListener('DOMContentLoaded', () => {
    let usernameInput = document.getElementById("usernameInput");
    let passwordInput = document.getElementById("passwordInput");
    const loginError = document.getElementById("loginError");
    const loginForm = document.getElementById("loginForm");
    const loginBtn = document.getElementById("loginBtn");

    function validateCredentials(event){
        event.preventDefault(); //Prevent default form submission
        if(usernameInput.value === "aleril0593" && passwordInput.value === "YellowMoon25$"){
            window.location.href = "home";//If credentials are correct, redirect to next page
        }
        else{
            loginError.textContent = "Oops! The credentials you entered are incorrect. Please try again.";//Login error message
            loginForm.reset();//Reset the form
        }
    }

    //Login button event listener
    loginBtn.addEventListener('click', validateCredentials);
});