function sort(nums, type) {
    if (type === 'asc'){
        return nums.sort((a, b) => a-b);
    }
    else{
        return nums.sort((a, b) => a-b).reverse();
    }
}

function type(...items) {
    let obj = {};
    items.forEach(item =>{
        let type = typeof item;
        if (obj.hasOwnProperty(type)){
            obj[type] ++;
        }
        else{
            obj[type] = 1;
        }
        console.log(`${type}: ${item}`);
    })
    Object.entries(obj)
        .sort((a, b) =>
            (b[1] - a[1]) == 0?b[0].localeCompare(a[0]) : b[1] - a[1]).forEach(type => {
        console.log(`${type[0]} = ${type[1]}`);
    });
}

function getFibonator(){
    let nums = [0, 1];
    let printedFirstOne = false;

    return function fibonaccinate() {
        if (printedFirstOne === false) {
            printedFirstOne = true;
            return 1;
        }
        let nextNum = nums[nums.length - 1] + nums[nums.length - 2];
        nums.push(nextNum);
        return nextNum;
    }
}

function solution() {
    let products = {
        carbohydrate: 0,
        flavour: 0,
        fat: 0,
        protein: 0
    }
    return (input) =>{
        let vals = input.split(' ');
        if (vals[0] === 'restock'){
            products[vals[1]] += Number(vals[2]);
            return "Success";
        }else if(vals[0] === 'prepare'){
            let mul = vals[2]
            switch(vals[1]){
                case 'apple':
                    if(products["carbohydrate"] < mul){
                        return "Error: not enough carbohydrate in stock";
                    }
                    if(products["flavour"] < mul*2){
                        return "Error: not enough flavour in stock";
                    }
                    products["carbohydrate"] -= mul;
                    products["flavour"] -= mul*2;
                    break;
                case 'lemonade':
                    if(products["carbohydrate"] < mul*10){
                        return "Error: not enough carbohydrate in stock";
                    }
                    if(products["flavour"] < mul*20){
                        return "Error: not enough flavour in stock";
                    }
                    products["carbohydrate"] -= mul*10;
                    products["flavour"] -= mul*20;
                    break;
                case 'burger':
                    if(products["carbohydrate"] < mul * 5){
                        return "Error: not enough carbohydrate in stock";
                    }
                    if(products["flavour"] < mul*3){
                        return "Error: not enough flavour in stock";
                    }
                    if(products["fat"] < mul*7){
                        return "Error: not enough fat in stock";
                    }
                    products["carbohydrate"] -= mul*5;
                    products["flavour"] -= mul*3;
                    products["fat"] -= mul*7;
                    break;
                case 'eggs':
                    if(products["protein"] < mul*5){
                        return "Error: not enough protein in stock";
                    }
                    if(products["fat"] < mul){
                        return "Error: not enough fat in stock";
                    }
                    if(products["flavour"] < mul){
                        return "Error: not enough flavour in stock";
                    }
                    products["protein"] -= mul*5;
                    products["flavour"] -= mul;
                    products["fat"] -= mul;
                    break;
                case 'turkey':
                    if(products["carbohydrate"] < mul*10){
                        return "Error: not enough carbohydrate in stock";
                    }
                    if(products["fat"] < mul*10){
                        return "Error: not enough fat in stock";
                    }
                    if(products["protein"] < mul*10){
                        return "Error: not enough protein in stock";
                    }
                    if(products["flavour"] < mul*10){
                        return "Error: not enough flavour in stock";
                    }
                    products["protein"] -= mul*10;
                    products["flavour"] -= mul*10;
                    products["fat"] -= mul*10;
                    products["carbohydrate"] -=mul*10;
                    break;
            }
            return "Success";
        }else{
            return `protein=${products["protein"]} carbohydrate=${products["carbohydrate"]} fat=${products["fat"]} flavour=${products["flavour"]}`
        }
    }
}

function add(num) {
    let sum = num;

    function calc(num2) {
        sum += num2;
        return calc;
    }

    calc.toString = function() { return sum };
    return calc;
}


