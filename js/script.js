const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const iphone = document.getElementById('iphone');


const minusOne = document.getElementById('minusOne');
const plusOne = document.getElementById('plusOne');
const iphoneOne = document.getElementById('iphoneOne');


minus.addEventListener('click', function() {
    handlePhonePrice(false);
    total();
})
plus.addEventListener('click', function() {
    handlePhonePrice(true);
    total();
})
minusOne.addEventListener('click', function() {
    handleCoverPrice(false);
    total();
})
plusOne.addEventListener('click', function() {
    handleCoverPrice(true);
    total();
})

function total() {
    let phonePrice = getInputText('iphone');
    document.getElementById('iphone').innerText = phonePrice;

    let casePrice = getInputText('iphoneOne');
    document.getElementById('iphoneOne').innerText = casePrice;

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

function handlePhonePrice(isIncrease) {
    let inputNumber = getInputNumber('text');
    if (isIncrease == true) {
        inputNumber++;
    }
    if (isIncrease == false) {
        if (inputNumber >= 1) {
            inputNumber--;
        }

    }
    document.getElementById('text').value = inputNumber;


    let phonePrice = getInputText('iphone');
    phonePrice = inputNumber * 1219;
    document.getElementById('iphone').innerText = phonePrice;
}

function handleCoverPrice(isIncrease) {
    let inputNumber = getInputNumber('textOne');
    if (isIncrease == true) {
        inputNumber++;
    }
    if (isIncrease == false) {
        if (inputNumber >= 1) {
            inputNumber--;
        }

    }
    document.getElementById('textOne').value = inputNumber;


    let phonePrice = getInputText('iphoneOne');
    phonePrice = inputNumber * 59;
    document.getElementById('iphoneOne').innerText = phonePrice;
}