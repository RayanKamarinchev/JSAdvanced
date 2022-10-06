function validate(obj){
    let validMethods = ["GET", "POST", "DELETE", "CONNECT"]
    let versions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    if(!validMethods.includes(obj.method)){
        throw new Error("Invalid request header: Invalid Method");
    }
    let reg = new RegExp("[a-zA-Z.\\d]+")
    if(obj.uri == undefined){
        throw new Error("Invalid request header: Invalid URI");
    }
    if(!obj.uri.match(reg) && obj.uri!=="*"){
        throw new Error("Invalid request header: Invalid URI");
    }
    if(!versions.includes(obj.version)){
        throw new Error("Invalid request header: Invalid Version");
    }
    reg = new RegExp("[^<>\\\\&,]+")
    if(obj.message == undefined){
        throw new Error("Invalid request header: Invalid Message");
    }
    if(!obj.message.match(reg) && obj.message!==""){
        throw new Error("Invalid request header: Invalid Message");
    }
    return obj;
}

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

module.exports = {isOddOrEven, lookupChar, mathEnforcer}