const $ = document.querySelector.bind(document)

const form = $('form')
const fullname = $('#fullname')
const email = $('#email')
const username = $('#username')
const phone = $('#phone')
const password = $('#password')
const passwordcf = $('#passwordcf')

// Show error
function showError(input,message) {
     const parentControl = input.parentElement
     const small = parentControl.querySelector('small')
     parentControl.className = 'form-control error'
     small.innerText = message
}

// Show success
function showSuccess(input, message) {
     const parentControl = input.parentElement
     const small = parentControl.querySelector('small')
     parentControl.className = 'form-control success'  
     small.innerText = message       
} 

form.addEventListener("submit", function(e){
    e.preventDefault();

    checkLengthInput(fullname, 5, 20)
    checkLengthInput(username, 2, 15)
    checkLengthInput(password, 6, 20)
    checkLengthInput(passwordcf, 6, 20)
    checkLengthInput(phone, 10, 20)
    checkPassword2(password, passwordcf)
    checkEmail(email)
 })

// Get filedname 
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check lenghth fullname
function checkLengthInput(input, min, max){
    if(input.value.trim() === ''){
       showError(input, `Please enter your ${getFieldName(input)}`)
    } else if (input.value.trim().length < min){
       showError(input, `Please enter at least ${min} characters`)
    } else if (input.value.trim().length > max){
        showError(input, `Please enter up to ${max} characters`)
    } else {
        showSuccess(input)
    }
}
// checkEmaiInput
function checkEmail(input){
  const regexEmail = 
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(input.value.trim() === ""){
    showError(input, `Please enter your ${getFieldName(input)}`)
  } else if(regexEmail.test(input.value.trim())){
    showSuccess(input)
  }

}
// check password2
function checkPassword2(password, cfPassword) {
   if(password.value !== cfPassword.value){
        showError(cfPassword, 'Password does not match')
   }
}
