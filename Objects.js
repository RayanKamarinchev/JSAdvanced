function calorie(raw){
    let result = {};
    for (let i = 0; i < raw.length; i+=2) {
        result[raw[i]] = parseInt(raw[i+1])
    }
    console.log(result);
}

function worker(worker){
    if (worker['dizziness']){
        worker['dizziness'] = false;
        worker['levelOfHydrated'] += worker['experience'] * worker['weight'] /10;
    }
    return worker;
}

function cars(car){
    let small = {
        power: 90,
        volume: 1800
    }
    let mid = {
        power: 120,
        volume: 2400
    }
    let monster = {
        power: 200,
        volume: 3500
    }
    let hatchback ={
        type: 'hatchback',
        color: car.color
    }
    let coupe = { type: 'coupe', color: car.color }
    let result = {
        model: car.model,
        engine: car.power<=90?small:car.power<=120?mid:monster,
        carriage: car.carriage === "hatchback" ? hatchback : coupe,
        wheels: new Array(4).fill(car.wheelsize % 2 === 1 ? car.wheelsize : car.wheelsize-1)
    }
    return result;
}

function heroes(heroes) {
    let result = [];
    for (const hero of heroes) {
        let [name, level, items] = hero.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        result.push({name, level, items})
    }
    return JSON.stringify(result);
}

function product(info){
    let products = [];
    for (const inf of info) {
        let [city, product, price] = inf.split(' | ');
        price = Number(price);

        if (products.hasOwnProperty(product)){
            if(products[product].price > price){
                products[product].price = price;
                products[product].city = city;
                products[product].product = product;
            }
            continue;
        }
        products[product] = {city: city, price: price, product: product};
    }

    for (const obj of Object.entries(products)) {
        console.log(`${obj[1].product} -> ${obj[1].price} (${obj[1].city})`)
    }
}

function dictionary(items) {
    let result = [];
    for (const item of items) {
        let word = item.split(' : ');
        result.push({name: word[0], price: Number(word[1])})
    }
    result.map(r=>r.name.toUpperCase())
    result = result.sort(function(a, b) {
        if (a.name < b.name)
        {
            return -1;
        }
        else if (a.name > b.name)
        {
            return 1;
        }
        return 0;
    });
    let letter = '0';
    for (const res of result) {
        if (letter != res.name[0]){
            letter = res.name[0];
            console.log(letter)
        }
        console.log(`  ${res.name}: ${res.price}`)
    }
}

function table(input){
    let cat = input[0].slice(2, -2).split(' | ');
    let result =[];
    for (let i = 1; i < input.length; i++) {
        let info = input[i].slice(2, -2).split(' | ');
        let obj = {};
        for (let j = 0; j < cat.length; j++) {
            if (j > 0)
                obj[cat[j]] = Number(Number(info[j]).toFixed(2));
            else
                obj[cat[j]] = info[j];
        }
        result.push(obj);
    }
    console.log(JSON.stringify(result));
}

function rect(text){

}