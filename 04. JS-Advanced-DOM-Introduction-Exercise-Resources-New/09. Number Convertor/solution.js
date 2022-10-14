function solve() {
    document.getElementsByTagName("button")[0].addEventListener('click', () => {
        if (document.getElementById("selectMenuTo").value == "binary") {
            let val = document.getElementById("input");
            document.getElementById("result").value = Number(val.value).toString(2);
        }
        else{
            let val = document.getElementById("input");
            document.getElementById("result").value = Number(val.value).toString(16).toUpperCase();
        }
    })
}