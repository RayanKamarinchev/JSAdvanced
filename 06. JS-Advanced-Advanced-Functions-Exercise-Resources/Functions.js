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


