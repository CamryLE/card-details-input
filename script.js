let cardHolder = document.getElementById('cardholder')
let cardSpan = document.getElementById('cardspan')
let cardNumber = document.getElementById('cardnumber')
let submitForm = document.getElementById('submitform')
let validation = document.getElementById('cardvalidation')
let numVal = document.getElementById('numvalidation')
let CVC = document.getElementById('cvcinput')
let form = document.getElementById('container')
let year = document.getElementById('month')
let month = document.getElementById('year')
let error = 1
let numberError = 1
let nameError = 1
let cvcError = 1

cardNumber.addEventListener('keyup', checkNumber)
cardHolder.addEventListener('keyup', checkName)
CVC.addEventListener('keyup', checkCVC)
submitForm.addEventListener('mouseover', val)
submitForm.addEventListener('click', displayVal)
// year.addEventListener('keyup', checkDate)
// month.addEventListener('keyup', checkDate)

//cardNumber.addEventListener('keyup', checkNumber)
//submitForm.addEventListener('click', validateForm)
function checkName() {

    if (isNaN(cardHolder.value)) {
        document.getElementById('cardholdererror').innerText = ""
        nameError = 0
        cardHolder.parentElement.className = 'form-control'
    } else if (cardHolder.value == "") {
        document.getElementById('cardholdererror').innerText = "Cannot be Blank"
        nameError = 1
        
    } else {
        document.getElementById('cardholdererror').innerText = "Cant have numbers"
        nameError = 1
        
    }
}

function checkNumber() {
    if (isNaN(cardNumber.value)) {
        document.getElementById('cardnumbererror').innerText = "Wrong Input, Numbers Only"
        numberError = 1

    } else if (cardNumber.value == "") {
        document.getElementById('cardnumbererror').innerText = "Cannot be Blank"
        numberError = 1
    } else {
        document.getElementById('cardnumbererror').innerText = ""
        numberError = 0
    }
}

function checkCVC() {
    if (isNaN(CVC.value)) {
        document.getElementById('cardcvcerror').innerText = "Wrong Input, Numbers Only"
        cvcError = 1
    }
    else if (CVC.value == "") {
        document.getElementById('cardcvcerror').innerText = "Cannot be Blank"
        numberError = 1

    }
    else {
        document.getElementById('cardcvcerror').innerText = ""
        cvcError = 0
    }
}

// function checkDate() {
//     if (month.value || year.value = "") {

//     }
// }

function val () {
    if (numberError > 0 || nameError > 0 || cvcError > 0) {
        container.action = 'completed.html'
        submitForm.type = 'button'
    }
    else {
        submitForm.type = 'submit'

    }
}

function displayVal () {
    if (numberError > 0 || nameError > 0 || cvcError > 0) {
        checkCVC()
        checkName()
        checkNumber()
    }

    if (numberError > 0) {
        cardHolder.parentElement.className = 'form-control bad input'
    } 

    if (nameError > 0) {
        cardNumber.parentElement.className = 'form-control bad input'
    } 

    if (cvcError > 0) {
        CVC.parentElement.className = 'form-control bad input'
    } 

    
}


// function checkName (e) {
//     if (e.target.value.includes())

// }

//function checkNumber

// function makeValid () {
//     if (cardHolder = ''){
//     validation.innerHTML = 'valid'
//     } else {
//         validation.innerHTML = 'invalid'
//     }
//     if (cardNumber.value.includes('a')) {
//         numVal.innerHTML = 'invalid'
//     } else if(cardNumber.innerHTML=('')) {
//         numVal.innerHTML ='blank'
//     } else {
//             numVal.innerHTML = 'valid'
//         }
// }


// function validateForm() {
//     if  (validation.innerHTML.includes('valid')) {
//         document.sendcard.action = "completed.html"
//     } 
// }

// function checkCard(e) {
//     if (e.target.value.includes('1')) {
//         validation.textContent = 'invalid'
//     } else {
//     validation.textContent = ''
//     }
// }


// function validate (e) {
//     if (validation = "invalid") { 
//         cardNumber.textContent = ''
//         cardHolder.textContent = ''
       
//     }
// }

// validate()

// console.log(validation.textContent)


// //Check Cardholder Text 
// function checkCard(e) {

//     const vals = cardNumber.value
//     console.log(vals)

//     if(e.target.value.includes('0','2','3','4','5','6','7','8','9')) {
//         cardHolder.nextElementSibling.textContent = 'Incorrect Input, Letters Only.'
//         //let cardError = document.createTextNode('Incorrect Input, Letters Only.')
//         //cardSpan.appendChild(cardError)
//     } else {
//     cardHolder.nextElementSibling.textContent = ''
//     }
// }

// function checkNumber(e) {
//     if(e.target.value.includes('1',)) {
//     cardNumber.nextElementSibling.textContent = 'Incorrect Input,  Characters A-Z only.'
//     } else {
//     cardNumber.nextElementSibling.textContent = ''
//     }
// }

// function checkNumberLength(e) {
    
// }

// console.log(cardHolder.nextElementSibling)
// console.log(cardHolder.nextElementSibling.textContent)