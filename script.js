const emailInput = document.getElementById("email-input");
const customMessage = document.getElementById("invalid-message");
const errorIcon = document.getElementById("error-icon");

emailInput.addEventListener("click", () => {
    emailInput.style.borderColor = "hsl(0, 36%, 70%)";
    customMessage.style.display = "none";
    errorIcon.style.display = "none";
})

function inputCheck() {
    const emailForm = document.getElementById("email-form");
    const emailRegex = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$', 'g');

    
    if(!emailRegex.exec(emailInput.value)){
        emailInput.style.borderColor= "hsl(0, 93%, 68%)";
        customMessage.style.display = "block";
        errorIcon.style.display = "block";
        return false;
    }

    emailForm.submit();

    

}


