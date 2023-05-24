// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// CODE FOR TASK #3

const validateCred = (numArr) => {
    // New array for the 2x numbers
    let checkedArray = [];
    
    // Reverse loop to push into checkArray the x2 numbers if array is even
    if (numArr.length % 2 === 0) {
        for (let i = numArr.length - 1; i >= 0; i--) {
            if (i % 2 !== 0) {
                checkedArray.push(numArr[i]);
            }
            if (i % 2 === 0) {
                if (numArr[i] * 2 > 9) {
                    checkedArray.push(numArr[i] * 2 - 9);
                } else {
                    checkedArray.push(numArr[i] * 2);
                }
            }
        } 
    }
    
    // Reverse loop to push into checkArray the x2 numbers if array is odd
    if (numArr.length % 2 !== 0) {
        for (let i = numArr.length - 1; i >= 0; i--) {
            if (i % 2 !== 0) {
                if (numArr[i] * 2 > 9) {
                    checkedArray.push(numArr[i] * 2 - 9);
                } else {
                    checkedArray.push(numArr[i] * 2);
                }
            }
            if (i % 2 === 0) {
                checkedArray.push(numArr[i]);
            }
        }
    }
    
    // TEST
    //console.log(checkedArray);
    
    // Add all nums in the array and get the sum modulo
    const verification = (numArr) => {
        let sum = 0;
        for (let num of numArr) {
            sum += num;
        }
        return sum % 10;
    }
    
    // TEST
    //console.log(verification(checkedArray));
    
    if (verification(checkedArray) === 0) {
        return true;
    } else {
        return false;
    }
}

// TEST
//console.log(validateCred(valid3));
//console.log(validateCred(invalid5));
//console.log(validateCred(mystery1));


// CODE FOR TASK #4:

const findInvalidCard = (cardArr) => {
    // New array to hold the results from filtering the cardArr
    const invalidCards = [];
    
    // Function to iterate over eacn card in the batch and push into the new array the cards that return false
    cardArr.forEach(numArr => {
        if (validateCred(numArr) === false) {
            invalidCards.push(numArr)
        }
    })

    return invalidCards;
}

// TEST
//console.log(findInvalidCard([valid1, valid2, valid3, valid4, valid5]));
//console.log(findInvalidCard([invalid1, invalid2, invalid3, invalid4, invalid5]));
//console.log(findInvalidCard(batch));


// CODE FOR TASK #5:

const idInvalidCardCompanies = (cardArr) => {
    // New array to hold the card comany names from the iteration below
    cardCompanies = [];
    
    // Iterate over each array of card numbers and push into casdCompanies the correct company name with no duplicates
    cardArr.forEach(numArr => {
        if (numArr[0] === 3 && cardCompanies.indexOf('Amex') === -1) {
            cardCompanies.push('Amex');
        } else if (numArr[0] === 4 && cardCompanies.indexOf('Visa') === -1) {
            cardCompanies.push('Visa');
        } else if (numArr[0] === 5 && cardCompanies.indexOf('MasterCard') === -1) {
            cardCompanies.push('MasterCard');
        } else if (numArr[0] === 6 && cardCompanies.indexOf('Discover') === -1) {
            cardCompanies.push('Discover');
        } else {
            console.log('Company not found')
        }
    })

    return cardCompanies;
}

// TEST
//console.log(idInvalidCardCompanies([invalid1]));
//console.log(idInvalidCardCompanies([valid3]));
//console.log(idInvalidCardCompanies(findInvalidCard(batch)));


// CODE TASK #7 (EXTRAS):

// Iterate over each character in the string
const stringToArray = (string) => {
    // Array to store the pushed numbers from the function below
    let cardNumsArray = [];
    
    // Goes over each character converting it from string tu number and pushing it into the cardNumsArray
    for (let i = 0; i < string.length; i++) {
        cardNumsArray.push(parseInt(string[i]))
    }

    return cardNumsArray;
}

// TEST
//console.log(stringToArray('5452368756683762'))
//console.log(validateCred(stringToArray('4539583603014719')))
