document.addEventListener('DOMContentLoaded', () => {
    const doneBtn = document.getElementById("doneBtn");
    const backBtn = document.getElementById("backBtn");
    const clearBtn = document.getElementById("clearBtn");

    let createAcctMsg = document.getElementById("createAcctMsg");
    let createAccountForm = document.getElementById("createAccountForm");

    let firstLastName = document.getElementById("firstLastName");
    let chosenUsername = document.getElementById("chosenUsername");
    let chosenPassword = document.getElementById("chosenPassword");
    let confirmPassword = document.getElementById("confirmPassword");

    function createAccount(event){
        //Password validation
        const minLength = 10;
        const maxLength = 20;
        const upperRegex = /[A-Z]/;
        const lowerRegex = /[a-z]/;
        const numRegex = /[0-9]/;
        const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        event.preventDefault(); //Prevent default form submission
        if(firstLastName.value.trim() == "" || chosenUsername.value.trim() == "" || chosenPassword.value.trim() == "" || confirmPassword.value.trim() == ""){
            createAcctMsg.textContent = "*One or more fields is empty. Please fill out all fields.";
        }
        else if(chosenPassword.value.trim().length < minLength || chosenPassword.value.trim().length > maxLength || !upperRegex.test(chosenPassword.value.trim()) || !lowerRegex.test(chosenPassword.value.trim()) || !numRegex.test(chosenPassword.value.trim()) || !specialCharRegex.test(chosenPassword.value.trim())){
            //If the chosen password does not meet password requirements, display message and clear field
            createAcctMsg.innerHTML = "*Password must meet the following requirements: <br><ul><li>Between 10-20 characters</li><li>At least 1 uppercase letter</li><li>At least 1 lowercase letter</li><li>At least 1 number</li><li>At least 1 special character</li><br>Please try again.";
            chosenPassword.value = "";
            confirmPassword.value = "";
        }
        else if(chosenPassword.value.trim() != confirmPassword.value.trim()){
            createAcctMsg.textContent = "*Passwords do not match";
            chosenPassword.value = "";
            confirmPassword.value = "";
        }
        else{
            createAcctMsg.textContent = "Account successfully created! You will be redirected back to the login page shortly."

            setTimeout(function() {
                window.location.href = "index";
            }, 5000); //Redirect to the login page after 5 seconds
        }
    }

    function goBack(event){
        event.preventDefault();
        window.location.href="index"; //Go back to the login page
    }

    function clearForm(event){
        event.preventDefault();
        createAccountForm.reset();
    }


    //Done button event listener
    doneBtn.addEventListener('click', createAccount);

    //Back button event listener
    backBtn.addEventListener('click', goBack);

    //Clear button event listener
    clearBtn.addEventListener('click', clearForm);
});