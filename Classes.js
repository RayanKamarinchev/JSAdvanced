class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea() {
        return this.width * this.height;
    }
}

class Request{
    constructor(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

function TicketCollector(db, sorter){
    class Ticker {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    db = db.map(t=>{
        let input = t.split('|');
        return new Ticker(input[0], Number(input[1]), input[2]);
    })
    if(sorter === "destination"){
        db.sort((a, b) => {
            if(a.destination > b.destination)
                return 1;
            else if(a.destination < b.destination)
                return -1;
            else
                return 0;
        })
    }else if(sorter === "price"){
        db.sort((a, b) => {
            if(a.price > b.price)
                return 1;
            else if(a.price < b.price)
                return -1;
            else
                return 0;
        })
    }else{
        db.sort((a, b) => {
            if(a.status > b.status)
                return 1;
            else if(a.status < b.status)
                return -1;
            else
                return 0;
        })
    }
    return db;
}

class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(item) {
        this.list.push(item);
        this.size++;
        this.list.sort((a, b) => a-b);
        return this;
    }

    remove(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error(`Index doesn't exist`);
        } else {
            this.list.splice(index, 1);
            this.size--;
            return;
        }
    }

    get(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error(`Index doesn't exist`);
        } else {
            return this.list[index];
        }
    }
}

class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = Math.max(innerLength, 0);
    }

    increase(len) {
        this.innerLength = this.innerLength+len;
    }

    decrease(len) {
        this.innerLength = Math.max(this.innerLength - len, 0);
    }

    toString() {
        let res = this.innerString.substring(0, this.innerLength);
        if (res.length < this.innerString.length)
            return res + "...";
        else
            return res;
    }
}


class Company {

    constructor() {
        this.department = [];
    }

    addEmployee(name, salary, position, department) {
        if(!name || !salary || !position || !department || salary < 0){
            throw new Error("Invalid input!");
        }
        this.department.push({
            name: name,
            salary: Number(salary),
            position: position,
            department: department
        });
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment(){
        let salaries = {};
        let employees = {};
        this.department.forEach((e) => {
            if (!salaries.hasOwnProperty(e.department)){
                salaries[e.department] = e.salary;
            }
            else{
                salaries[e.department] += e.salary;
            }
            if (!employees.hasOwnProperty(e.department)){
                employees[e.department] = 1;
            }
            else{
                employees[e.department] ++;
            }
        })
        salaries = Object.entries(salaries).map(salary => [salary[1]/employees[salary[0]], salary[0]]);
        let dep = salaries.find(s=>s[0] === Math.max(...salaries.map(salary => salary[0])))
        let res = `Best Department is: ${dep[1]}\n` +
            `Average salary: ${dep[0].toFixed(2)}\n`
        this.department.filter(e=>e.department === dep[1]).sort((a, b) => {
            if (a.salary < b.salary) return 1
            if (a.salary > b.salary) return -1
            if (a.salary = b.salary) {
                return a.name.localeCompare(b.name);
            }
        }).forEach(e=> res += `${e.name} ${e.salary} ${e.position}\n`)
        return res.trim();
    }
}

class Hex{
    constructor(num) {
        this.num = num;
    }

    toString(){
        return "0x" + this.num.toString(16).toUpperCase();
    }
    valueOf(){
        return this.num;
    }
    plus(number){
        return new Hex(this.num + number);
    }
    minus(number){
        return new Hex(this.num- number);
    }
    parse(string){
        return parseInt(string, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
