// Name: Thi Huong Giang Nguyen
// date: 14/5/2021
// assignment Order Form1 

// Pseudocode
// CREATE function
// INPUT number's_choice
// WHILE (input<1 || input >3)
//     OUTPUT error
//     Re-input 
// END WHILE
// IF (input ==1)
//     OUTPUT (go to Google)
// IF (input ==2)
//     OUTPUT (go to Learn)
// IF (input ==3)
//     OUTPUT (go to Youtube)
// END IF 
// RETURN

// go to other websites button
function redirect(){
    var input = parseInt(prompt("Which website do you want:\n 1. Google\n 2. Tafesa\n 3. Youtube"));
    // validate input must be 1-3
    while (input<1 || input>3){
        alert("You are enter wrong number.\n The number must be 1-3.")
        input = parseInt(prompt("Which website do you want:\n 1. Google\n 2. Tafesa\n 3. Youtube"));
    }

    if (input ==1){
        window.open("https://www.google.com/", "myWindow", 
        "height = 800, width = 800");
    }
    if (input ==2){
        window.open("https://www.tafesa.edu.au","myWindow", 
        "height = 800, width = 800");
    }
    if (input ==3){
        window.open("https://www.youtube.com", "myWindow", 
        "height = 800, width = 800");
    }
    return;
}

// =============Pseudocode

// INPUT firstName, lastName, postCode, email, cardNumber, ccv, creditCard
// // create function of each rule
// CREATE isRequired function{
//     If (INPUT =="")
//         OUTPUT error 
//     OUTPUT success
// }
// CREATE isEmail function{
//     IF (INPUT not contain "@" and ".")
//         OUTPUT error 
//     OUTPUT success
// }
// CREATE lengthRequired function {
//     IF (INPUT != length)
//         OUTPUT error 
//     OUTPUT success
// }
// CREATE minLengthRequired function {
//     IF (INPUT <= minlength)
//         OUTPUT error 
//     OUTPUT success
// }
// CREATE isNumber funtion{
//     IF (INPUT is not number)
//         OUTPUT error 
//     OUTPUT success
// }
// CREATE errorMessage function{
//     INPUT errorMessage tag 
//     OUTPUT show errorMessage 
// }
// CREATE successMessage function{
//     INPUT errorMessage tag 
//     OUTPUT errorMessage =""
// }
// // validate each textfield with rules are required
// CREATE validateFirstName function{
//     IF firstName == false
//         OUTPUT errorMessage
//     OUTPUT success
// } 
// CREATE validatelastName function{
//     IF firstName == false
//         OUTPUT errorMessage
//     OUTPUT success
// } 
// CREATE validatePostCode function{
//     IF firstName == false
//         OUTPUT errorMessage
//     OUTPUT success
// }
// CREATE validateEmail function{
//     IF firstName == false
//         OUTPUT errorMessage
//     OUTPUT success
// }
// CREATE validateCardNumber function{
//     IF firstName == false
//         OUTPUT errorMessage
//     OUTPUT success
// }
// CREATE validateCCV function{
//     IF firstName == false
//         OUTPUT errorMessage
//     OUTPUT success
// }
// CREATE validateCreditCard function{
//     IF firstName == false
//         OUTPUT errorMessage
//     OUTPUT success
// }
//CREATE validateExpiryDate function{
    //     IF firstName == false
    //         OUTPUT errorMessage
    //     OUTPUT success
    // }
// // validate form
// CREATE allInputValidate funtion{
//     IF (all input fiel == true)
//         OUTPUT success
//     OUTPUT error
// }

// submit button
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var postCode = document.getElementById("postCode");
    var email = document.getElementById("email");
    var cardNumber = document.getElementById("cardNumber");
    var ccv = document.getElementById("ccv");
    var creditCard = document.getElementById("creditCard");
    var input = document.querySelector("input");
   

    // field can not empty
function isRequired(value){
    return value.trim();
}
// checking contain "@" character
function isEmail(value){ 
    if (value.indexOf("@")==-1 || value.indexOf(".")==-1){
        return false;
    }
    return true 
}
// checking length
function lengthRequired(value, length){
    return value.length == length ? undefined : `Must contain ${length} characters`;
}
function minLengthRequired(value, minLength){
    return value.length >= minLength ? undefined : `Must contain ${minLength} characters`;
}
// checking is number
function isNumber(value){
    return isNaN(value); 
}
// function changeBgd
 // change textfield color
//  function changeBgd(event)
//  {
//     if (event.type == "focus")
//         event.target.style.backgroundColor="yellow";
//     else if (event.type == "blur"){
//         event.target.style.backgroundColor="white";
//     }
//  }
//  function getEvent(input){
//     var myElement = input.parentElement.querySelector("input");
//     myElement.addEventListener("focus",changeBgd);
//     myElement.addEventListener("blur",changeBgd);
//  }
 function setBgd(textField)
 {
     textField.style.background="yellow";
 }
 function resetBgd(textField)
 {
     textField.style.background="white";
 }
//show error message
function getErrorMessage(input, message){
    var errorElement = input.parentElement.querySelector(".errorMessage");
    errorElement.innerText = message;
    errorElement.style.color = "red";
}
//show success message
function getSuccess(input){
    var errorElement = input.parentElement.querySelector(".errorMessage");
    errorElement.innerText = "";
}
 // validate first name can not blank
function validateFirstName(){
    //getEvent(firstName);
    if (!isRequired(firstName.value)){
        getErrorMessage(firstName, "This field can not blank");
        firstName.focus();
        return false;
    }
    else{
        getSuccess(firstName);
        resetBgd(firstName);
        lastName.focus();
        return true;
    }   
}
 // validate last name can not blank
function validateLastName(){  
    //getEvent(lastName);
    if (!isRequired(lastName.value)){
        getErrorMessage(lastName, "This field can not blank");
        lastName.focus();
        return false;
    }
    else{
        getSuccess(lastName);
        resetBgd(lastName);
        postCode.focus();
        return true;
    }    
}
 // validate post code 
function validatePostcode(){
    // getEvent(postCode);
    // post code can not blank
    if (!isRequired(postCode.value)){
        getErrorMessage(postCode, "This field can not blank");
        postCode.focus();
        return false;
    }
    // contains 4 characters
    else if (lengthRequired(postCode.value, 4)){
        getErrorMessage(postCode, "Must contain 4 characters");
        postCode.focus();
        return false;
    }
    // contains only number
    else if (isNumber(postCode.value)){
        getErrorMessage(postCode, "Must be number")
        postCode.focus();
        return false;
    }
    else{
        getSuccess(postCode);
        resetBgd(postCode);
        email.focus();
        return true;
    }
}
// validate email must be at least 8 characters anf contain "@" anf "." characters
function validateEmail(){
    // getEvent(email);
    // Email can not blank
    if (!isRequired(email.value)){
        getErrorMessage(email, "This field can not blank");
        email.focus();
        return false;
    }
    // email must be at least 8 characters
    else if (!minLengthRequired(email, 8)){
        getErrorMessage(email, 'Must at least 8 characters');
        email.focus();
        return false;
    }
    // contain "@" and "." characters
    else if (!isEmail(email.value)){
        getErrorMessage(email, "Password is not match");
        email.focus();
        return false;
    }
    else{
        getSuccess(email);
        resetBgd(email);
        creditCard.focus();
        return true;
    }
}
// validate credit card can not blank
//credit card can not unselect so if value of option tag is empty, show error message
function validateCreditCard(){
    var creditCardErrorMessage = document.getElementById("creditCardErrorMessage");
    if (!isRequired(creditCard.value)){ //creditCard.value == ""
        creditCardErrorMessage.innerHTML = "Please select credit card";
        creditCardErrorMessage.style.color = "red";
        creditCard.focus();
        return false;
    }
    else{
        creditCardErrorMessage.innerHTML = "";
        cardNumber.focus();
        return true;
    }
}
// validate card number can not blank and has 16 numbers (not characters)
function validateCardNumber(){
    // getEvent(cardNumber);
    // card number can not blank 
    if (!isRequired(cardNumber.value)){
        getErrorMessage(cardNumber, "This field can not blank");
        cardNumber.focus();
        return false;
    }
    // has 16 characters
    else if (lengthRequired(cardNumber.value, 16)){
        getErrorMessage(cardNumber, 'Must contain 16 numbers');
        cardNumber.focus();
        return false;
    }
    // must be number
    else if (isNumber(cardNumber.value)){
        getErrorMessage(cardNumber, "Must be number")
        cardNumber.focus();
        return false;
    }
    else{
        getSuccess(cardNumber)
        resetBgd(cardNumber);
        ccv.focus();
        return true;
    }
}
//validate CCV has 3 numbers (not characters)
function validateCCV(){
    // getEvent(ccv);
    // card number can not blank 
    if (!isRequired(ccv.value)){
        getErrorMessage(ccv, "This field can not blank");
        ccv.focus();
        return false;
    }
    // has 3 characters
    else if (lengthRequired(ccv.value,3)){
        getErrorMessage(ccv, "Must contain 3 numbers");
        ccv.focus();
        return false;
    }
     // must be number
    else if (isNumber(ccv.value)){
        getErrorMessage(ccv, "Must be number")
        ccv.focus();
        return false;
    }
    else{
        getSuccess(ccv)
        resetBgd(ccv);
        return true;
    }
}
// validate expiry, the expiry month and expiry year against the current month and current year
function expiryValidate(){
    var currentMonth  = new Date().getMonth() +1;
    var currentYear = new Date().getFullYear();
    var expiryError = document.getElementById("expiryError");
    var cardMonth = document.getElementById("month");
    var cardYear = document.getElementById("year");
    // expiry date can not blank
    if   (cardMonth.value == "" || cardYear.value ==""){ //(!isRequired(cardMonth.value) || !isRequired(cardYear.value)){
        expiryError.innerHTML = "Please select expiry date";
        expiryError.style.color = "red";
        cardMonth.focus();
        return false;
    }
    // card year must be less than current year
    else if (currentYear > parseInt(cardYear.value)){
        expiryError.innerHTML = "The expiry date is invalid. Please select again";
        expiryError.style.color = "red";
        cardMonth.focus();
        return false;
    }
    // if card year = current year and card month must be greater than current month
    else if (currentMonth > parseInt(cardMonth.value) && currentYear == parseInt(cardYear.value)){
        expiryError.innerHTML = "The expiry date is invalid. Please select again";
        expiryError.style.color = "red";
        cardMonth.focus();
        return false;
    }else
        expiryError.innerHTML = "";
        return true;
    
}
function checkInput(){
    var check = validateFirstName() && validateLastName() && validatePostcode() && 
    validateEmail() && validateCreditCard() && validateCardNumber() && validateCCV() && expiryValidate();
    if (check == true){
        alert("Thank you for your submission");
    }
    return check;

}
// Help button
function help(){
    window.open("./html/helpButtton.html", "myWindow", 
        "height = 500, width = 800");
        
    return false;
}
