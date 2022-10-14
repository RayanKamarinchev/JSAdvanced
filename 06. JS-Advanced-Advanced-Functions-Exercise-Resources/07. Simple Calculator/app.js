function calculator() {
    return {
        init(id1, id2, result){
            this.id1 = document.querySelector(id1);
            this.id2 = document.querySelector(id2);
            this.result = document.querySelector(result);
        },
        add() {
            this.result.value = Number(this.id1.value) + Number(this.id2.value);
        },
        subtract() {
            this.result.value = Number(this.id1.value) - Number(this.id2.value);
        }
    }
}

const calculate = calculator ();
calculate.init('#num1', '#num2', '#result');
