function delimiter(arr, delimiter) {
    console.log(arr.join(delimiter));
}

function everyN(arr, num) {
    return arr.filter((n, i) => i % num === 0);
}

function AddRemove(commands){
    let arr = [];
    commands.forEach((c, i) => {
        if (c === "add"){
            arr.push(i + 1)
        }else{
            arr.pop();
        }
        i++;
    })
    if (arr.length > 0)
        console.log(arr.join('\n'));
    else
        console.log("Empty")
}

function rotate(arr, num) {
    for (let i = 0; i < num%arr.length; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}

function increasing(lines){
    lines=lines.map(Number);
    let result=[];
    let biggest = lines[0];
    for (let i = 0; i < lines.length; i++) {
        if(lines[i]>=biggest){
            result.push(lines[i]);
            biggest=lines[i];
        }
    }
    return result;
}

function sortNames(names){
    console.log(names.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    }).map((n, i) => i + 1 + '.' + n).join('\n'));
}

function sortNumbers(numbers){
    let sort = numbers.sort((a, b) => a-b);
    let big = (sort.splice(sort.length/2, sort.length-1)).reverse();
    let result =[];
    for (let i = 0; i < big.length; i++) {
        result.push(sort[i], big[i]);
    }
    return result;
}

function sortBy2(words) {
    console.log(words.sort(function (a, b) {
        let dif = a.length - b.length;
        if(dif == 0)
            return a.toLowerCase().localeCompare(b.toLowerCase());
        else
            return dif
    }).join('\n'))
}

function magic(matrix){
    let oldSum = matrix[1].reduce((a, b) => a + b, 0);
    for (let i = 0; i < matrix.length; i++) {
        let sumHor = matrix[i].reduce((a, b) => a + b, 0);
        let sumVer = 0;
        for (let j = 0; j < matrix.length; j++) {
            sumVer += matrix[j][i];
        }
        if (sumHor !== oldSum || sumVer !== oldSum)
            return false;
        oldSum = sumHor;
    }
    return true;
}

function ticTacToe(commands){
    let matrix = [["false", "false", "false"],["false", "false", "false"],["false", "false", "false"],]
    let winner = 'false';
    let playerTurn = 0;
    for (let i = 0; i < commands.length; i++) {
        let cordinates = commands[i].split(" ").map(Number);
        if (matrix[cordinates[0]][cordinates[1]] !== 'false'){
            console.log("This place is already taken. Please choose another!")
            continue;
        }
        matrix[cordinates[0]][cordinates[1]] = playerTurn%2 === 0 ? 'X' : 'O';
        playerTurn++;
        if(matrix[0][0] === matrix[0][1] && matrix[0][0] === matrix[0][ 2]){
            winner = matrix[0][0];
            if (winner === 'false')
                continue;
            break;
        }
        if(matrix[1][0] === matrix[1][1] && matrix[1][0] === matrix[1][ 2]){
            winner = matrix[1][0];
            if (winner === 'false')
                continue;
            break;
        }
        if(matrix[2][0] === matrix[2][1] && matrix[2][0] === matrix[2][ 2]){
            winner = matrix[2][0];
            if (winner === 'false')
                continue;
            break;
        }

        if(matrix[0][0] === matrix[1][0] && matrix[0][0] === matrix[2][ 0]){
            winner = matrix[0][0];
            if (winner === 'false')
                continue;
            break;
        }
        if(matrix[0][1] === matrix[1][1] && matrix[0][1] === matrix[2][ 1]){
            winner = matrix[0][1];
            if (winner === 'false')
                continue;
            break;
        }
        if(matrix[0][2] === matrix[1][2] && matrix[0][2] === matrix[2][2]){
            winner = matrix[0][2];
            if (winner === 'false')
                continue;
            break;
        }

        if(matrix[0][0] === matrix[1][1] && matrix[0][0] === matrix[2][ 2]){
            winner = matrix[0][0];
            if (winner === 'false')
                continue;
            break;
        }
        if(matrix[0][2] === matrix[1][1] && matrix[0][2] === matrix[2][ 0]){
            winner = matrix[0][2];
            if (winner === 'false')
                continue;
            break;
        }
        let counts = 0;
        for (let j = 0; j < matrix.length; j++) {
            if(matrix[j].indexOf('false') === -1){
                counts++;
            }
        }
        if(counts === 3)
            break;
    }
    if(winner === 'false'){
        console.log("The game ended! Nobody wins :(");
    }else if(winner === 'O'){
        console.log("Player O wins!");
    }else{
        console.log("Player X wins!")
    }
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join('\t'));
    }
}

function diagonal(matrix){
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].split(' ').map(Number);
    }
    for (let i = 0; i < matrix.length; i++) {
        sum1 += matrix[i][i];
        sum2 += matrix[i][matrix.length-1-i];
    }
    if(sum1 === sum2){
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if(i!=j && i!= matrix.length-1-j){
                    matrix[i][j] = sum1;
                }
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}


