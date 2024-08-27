let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let inputEmail = document.querySelector("#email");
let query = document.querySelectorAll(".radio");
let textMessage = document.querySelector("#message");
const consent = document.querySelector("#consent");
const sucess = document.querySelector("#sucess");



let errorFistName = document.querySelector(".error-first-name");
let errorLastName = document.querySelector(".error-last-name");
let errorEmail = document.querySelector(".error-email");
const errorQuery = document.querySelector(".queryError");
const textError = document.querySelector(".textareaError");
const checkboxerror = document.querySelector(".checkboxError");

const input = document.querySelector("#submit");


input.addEventListener("click", (e) => {
    let validacao = false;
    e.preventDefault();

    let first_name = firstName.value.trim();
    let last_name = lastName.value.trim();
    let email = inputEmail.value.trim();
    let message = textMessage.value.trim();


    // Validar campos
    if (first_name === "") {
        errorFistName.innerHTML = "this field is required.";
        errorFistName.style.color = "red";
        firstName.classList.add("borderRed");
    }

    if (last_name === "") {
        errorLastName.innerHTML = "this field is required.";
        errorLastName.style.color = "red";
        lastName.classList.add("borderRed")
    }

    if (email === "") {
        errorEmail.innerHTML = "please enter a valid email adress";
        errorEmail.style.color = "red";
        inputEmail.classList.add("borderRed");

    }
    const querySelected = Array.from(query).some(radio => radio.checked);
    if (!querySelected) {
        errorQuery.innerHTML = "Please select a query type";
        errorQuery.style.color = "red";
    }

    if (message == "") {
        textError.innerHTML = "this field is required";
        textError.style.color = "red";
    }

    if (!consent.checked) {
        checkboxerror.innerHTML = "to submit this form, please consent to begin contacted";
        checkboxerror.style.color = "red";
        return;
    } 
    else{
        validacao = true;
    }
   
    
    
   
    if(validacao) {


        sucess.style.display == "none"
        sucess.style.display = "block";

        setTimeout(()=>{
            
                sucess.style.display = "none";
           
                location.reload();
        },2000)
      

    }

}

)
