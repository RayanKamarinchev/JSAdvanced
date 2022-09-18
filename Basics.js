function fruitPrice(fruit, grams, fruitPrice){
    console.log(`I need $${(fruitPrice*grams/1000).toFixed(2)} to buy ${(grams/1000).toFixed(2)} kilograms ${fruit}.`);
}
function gcd (a, b) {
    while (b !== 0){
        let oldA = a;
        a = b;
        b = oldA%b;
    }
    console.log(a);
}
function sameNums(num){
    let firstNum = num%10;
    let isTrue = true;
    let digitSum = firstNum;
    for (let i = 1; i < num.toString().length; i++) {
        let digit = num / Math.pow(10, i) % 10;
        digit = Math.floor(digit);
        if (digit !== firstNum) {
            isTrue = false;
        }
        digitSum += digit;
    }
    console.log(isTrue.toString());
    console.log(digitSum);
}
function previousDay(year, month, day) {
    let date = new Date(year, month-1, day-1);
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}
function  walkTime(steps, stepLen, speed) {
    let time = new Date(0);
    let road = steps*stepLen/1000;
    let seconds = Math.ceil(road/speed*3600+60*Math.floor(road*2));
    time.setSeconds(seconds);
    console.log(`${('0' + time.getHours()).slice(-2)}:${('0' + time.getMinutes()).slice(-2)}:${('0' + (time.getSeconds())).slice(-2)}`);
}
 function radar(speed, road){
    let limit = 0;
    switch(road) {
        case "motorway":
            limit = 130;
            break;
        case "interstate":
            limit = 90;
            break;
        case "city":
            limit = 50;
            break;
        case "residential":
            limit = 20;
            break;
    }
    let status = undefined;
    let difference = speed - limit;
    if(difference <= 20){
        status = "speeding";
    }else if(difference <= 40){
        status = "excessive speeding";
    }else{
        status = "reckless driving";
    }
    if(difference <= 0){
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    }else{
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
    }
 }

function cookNumbers(num, first, second, third, fourth, fifth){
    let actions = [first, second, third, fourth, fifth]
    for (let i = 0; i < 5; i++) {
        switch (actions[i]){
            case "chop":
                num *= 0.5;
                break;
            case "dice":
                num = Math.sqrt(num);
                break;
            case "spice":
                num ++;
                break;
            case "bake":
                num *= 3;
                break;
            case "fillet":
                num *= 0.8;
                break;
        }
        console.log(num);
    }
}

function validation(x1, y1, x2, y2) {
    function formula(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)% 1 == 0;
    }
    if (formula(x1, y1, 0, 0)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    }else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    if (formula(x2, y2, 0, 0)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    }else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    if (formula(x1, y1, x2, y2)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}

function upper(text) {
    let reg = new RegExp(/[a-zA-Z\d]+/g)
    let words = text.match(reg);
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].toUpperCase();
    }
    console.log(words.join(', '));
}

upper('hello')
