function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(20, 4, sum));

function date(callback) {
    console.log(new Date);
    setTimeout(function () {
        let date = new Date;
        callback(date);
    }, 3000);
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);


function div(nu1, nu2) {
    return nu1 / nu2;
}

function calcDiv(nu1, nu2, callback) {
    return callback(nu1, nu2);
}

console.log(calcDiv(3, 5, div));