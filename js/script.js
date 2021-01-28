const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const iphone = document.getElementById('phonePrice');


const minusOne = document.getElementById('minusOne');
const plusOne = document.getElementById('plusOne');
const coverPrice = document.getElementById('coverPrice');


minus.addEventListener('click', function() {
    handleProductPrice('phone', false);
    totalPrice();
})
plus.addEventListener('click', function() {
    handleProductPrice('phone', true);
    totalPrice();
})
minusOne.addEventListener('click', function() {
    handleProductPrice('cover', false);
    totalPrice();
})
plusOne.addEventListener('click', function() {
    handleProductPrice('cover', true);
    totalPrice();
})

function totalPrice() {
    let phonePrice = getInputText('phonePrice');
    document.getElementById('phonePrice').innerText = phonePrice;

    let casePrice = getInputText('coverPrice');
    document.getElementById('coverPrice').innerText = casePrice;

    let subTotal = getInputText('subTotal');
    subTotal = phonePrice + casePrice;
    document.getElementById('subTotal').innerText = subTotal;


    let texInput = taxCalculation(subTotal);
    document.getElementById('tax').innerText = texInput;
    let totalCost = texInput + subTotal;
    document.getElementById('total').innerText = totalCost;
    console.log(texInput);

}


function getInputNumber(id) {
    const textInput = document.getElementById(id).value;
    let inputNumber = parseFloat(textInput);
    return inputNumber;
}

function getInputText(id) {
    const textInput = document.getElementById(id).innerText;
    let inputNumber = parseFloat(textInput);
    return inputNumber;
}

function taxCalculation(price) {
    let taxAmount = 0;
    if (price > 1500) {
        taxAmount = Math.ceil(price * 0.05);
    }
    return taxAmount;
}

function handleProductPrice(product, isIncrease) {
    let inputNumber = getInputNumber(product + 'Count');
    if (isIncrease == true) {
        inputNumber++;
    }
    if (isIncrease == false) {
        if (inputNumber >= 1) {
            inputNumber--;
        }

    }
    document.getElementById(product + 'Count').value = inputNumber;


    let productPrice = getInputText(product + 'Price');
    if (product == 'phone') {
        productPrice = inputNumber * 1219;
    }
    if (product == 'cover') {
        productPrice = inputNumber * 59;
    }

    document.getElementById(product + 'Price').innerText = productPrice;
}