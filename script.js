var cardHolder = document.getElementById('cardholder')
var cardSpan = document.getElementById('cardspan')
var cardNumber = document.getElementById('cardnumber')
var submitForm = document.getElementById('submitform')
var validation = document.getElementById('cardvalidation')
var numVal = document.getElementById('numvalidation')
var CVC = document.getElementById('cvcinput')
var form = document.getElementById('container')
var error = 1
var numberError = 1
var nameError = 1
var cvcError = 1

cardNumber.addEventListener('keyup', checkNumber)
cardHolder.addEventListener('keyup', checkName)
CVC.addEventListener('keyup', checkCVC)
submitForm.addEventListener('mouseover', val)
submitForm.addEventListener('click', displayVal)
//cardNumber.addEventListener('keyup', checkNumber)
//submitForm.addEventListener('click', validateForm)
function checkName() {

    if (isNaN(cardHolder.value)) {
        document.getElementById('cardholdererror').innerText = ""
        nameError = 0
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

function val () {
    if (numberError > 0 || nameError > 0 || cvcError > 0) {
        container.action = 'completed.html'
        console.log ('deez')
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
//         //var cardError = document.createTextNode('Incorrect Input, Letters Only.')
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