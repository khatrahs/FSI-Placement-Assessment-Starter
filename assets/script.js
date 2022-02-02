// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Harjit Khatra" // HINT: Replace this with your own name!

function updateGb(displayTotal){
    let quantity = document.querySelector('#qty-gb')
    quantity.innerHTML = displayTotal
}
function updateTotal(displayTotal){
    let quantity = document.querySelector('#qty-total')
    quantity.innerHTML = displayTotal
}
function updateCc(displayTotal){
    let quantity = document.querySelector('#qty-cc')
    quantity.innerHTML = displayTotal
}
function updateSugar(displayTotal){
    let quantity = document.querySelector('#qty-sugar')
    quantity.innerHTML = displayTotal
}

// We'll use these variables to track the counts of each cookie type
let total = 0 //Cookie total
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
credit.textContent = `Created by ${yourName}`

const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
gbPlusBtn.addEventListener('click', function() {
    gb++
    total++
    updateTotal(`${total}`)
    updateGb(`${gb}`)

})
gbMinusBtn.addEventListener('click', function() {
    if (gb > 0) {
        gb--
        total--
    }
        updateTotal(`${total}`)
        updateGb(`${gb}`)
    
})
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')
sugarPlusBtn.addEventListener('click', function() {
    sugar++
    total++
    updateTotal(`${total}`)
    updateSugar(`${sugar}`)

})
sugarMinusBtn.addEventListener('click', function() {
    if (sugar > 0) {
        sugar--
        total--
    }
        updateTotal(`${total}`)
        updateSugar(`${sugar}`)
    
})
// TODO: Hook up event listeners for the rest of the buttons
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
ccPlusBtn.addEventListener('click', function() {
    cc++
    total++
    updateTotal(`${total}`)
    updateCc(`${cc}`)

})
ccMinusBtn.addEventListener('click', function(){
    if (cc > 0) {
        cc--
        total--
    }
        updateTotal(`${total}`)
        updateCc(`${cc}`)
    
})