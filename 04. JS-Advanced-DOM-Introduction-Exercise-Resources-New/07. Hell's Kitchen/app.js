function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        let input = JSON.parse(document.querySelector('#inputs textarea').value).map(r => r.split(' - '));
        let restaurants = [];
        for (let i = 0; i < input.length; i++) {
            let index = -1;
            for (let j = 0; j < restaurants.length; j++) {
                if (restaurants[j][0] == input[i][0]){
                    index = i-1;
                }
            }
            if (index === -1) {
                restaurants.push([input[i][0], input[i][1].split(', ').map(function (w) {
                    return {
                        name: w.split(' ')[0],
                        salary: Number(w.split(' ')[1])
                    }
                })]);
            }else{
                restaurants[index][1].push(...input[i][1].split(', ').map(function (w) {
                    return {
                        name: w.split(' ')[0],
                        salary: Number(w.split(' ')[1])
                    }
                }))
            }
        }
        console.log(restaurants.map(r => r[1].map(w => w.salary)))
        let avgs = [];
        for (const restaurant of restaurants.map(r => r[1].map(w => w.salary))) {
            avgs.push(restaurant.reduce((a, b) => a + b, 0) / restaurant.length);
        }
        let bestIndex = avgs.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
        let restaurant = restaurants[bestIndex];
        let workers = restaurants[bestIndex][1]
        console.log(restaurant);

        document.querySelector('#bestRestaurant p').textContent = `Name: ${restaurant[0]} Average Salary: ${(workers.map(w => Number(w.salary)).reduce((a, b) => a + b, 0)/workers.length).toFixed(2)} Best Salary: ${Math.max(...restaurant[1].map(r => r.salary)).toFixed(2)}`;
        document.querySelector('#workers p').textContent = restaurant[1].map(w => `Name: ${w.name} With Salary: ${w.salary}`).join(' ');
    }
}