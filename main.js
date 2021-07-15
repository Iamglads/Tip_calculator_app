const bill = document.querySelector('.select__tip--bill')
const numberOfPeople = document.querySelector('.select__tip--number')
const tipsBtns = document.querySelectorAll('.btn-tips')
const btnReset = document.querySelector('.btn-reset')
const totalTips = document.querySelector('.tip-amount')
const totalPerson = document.querySelector('.total-person')

const feedback = document.querySelector('.feedback-number')

for(let i = 0; i < tipsBtns.length; i++) {
    tipsBtns[i].addEventListener('click', (e) => {
        e.preventDefault()
        let tipsValue = tipsBtns[i].getAttribute('value')
        let billValue = bill.value
        let numberPersonValue = numberOfPeople.value

        if(numberPersonValue == 0) {
            sendFeedback( feedback, "Can't be 0!")
            setInterval(function() {
                sendFeedback( feedback, " ")
            }, 3000)
            
        } 
        else {
            tipsBtns[i].style.backgroundColor = "#26c0ab"
            totalTips.innerHTML = Number.parseFloat( tipsAmount(calculerTips(billValue, tipsValue), billValue)).toFixed(2)
            totalPerson.innerHTML = Number.parseFloat(tipsAmountPerPerson(billValue, calculerTips(billValue, tipsValue), numberPersonValue)).toFixed(2)

            
       /*   console.log("% du tip:" + tipsValue)
            console.log(calculerTips(billValue, tipsValue))
            console.log(tipsAmountPerPerson(billValue, calculerTips(billValue, tipsValue), numberPersonValue)) 
        */
        }
    })
}

btnReset.addEventListener('click', () => {
    location.reload()
})

function calculerTips (bill, tip) {
    return bill * tip
}

function tipsAmount (totalWithTips, bill) {
    return totalWithTips - bill
}

function tipsAmountPerPerson (bill, amountWithTips, numberPerson) {
    let tipsAmount = amountWithTips - bill
    return tipsAmount / numberPerson
}

function sendFeedback (element, text) {
    return element.innerHTML = text
}
