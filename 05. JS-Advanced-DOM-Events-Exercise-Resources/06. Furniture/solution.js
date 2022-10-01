function solve() {
    let btn = document.querySelectorAll("#exercise button")[0];
    btn.addEventListener("click",() => {
        let cols = document.querySelectorAll(".table td");
        let items = JSON.parse(document.querySelectorAll("#exercise textarea")[0].value);
        let rows = document.querySelectorAll(".table tbody")[0];
        items.forEach(item => {
            let row = document.createElement("tr");
            let td = document.createElement("td");
            let img = document.createElement("img");
            img.src = item.img;
            td.appendChild(img);
            let col = td;
            row.appendChild(col);

            let p = document.createElement("p");
            td = document.createElement("td");
            p.textContent = item.name;
            td.appendChild(p);
            col = td;
            row.appendChild(col);

            p = document.createElement("p");
            td = document.createElement("td");
            p.textContent = item.price;
            td.appendChild(p);
            col = td;
            row.appendChild(col);

            p = document.createElement("p");
            td = document.createElement("td");
            p.textContent = item.decFactor;
            td.appendChild(p);
            col = td;
            row.appendChild(col);
            rows.appendChild(row);

            let input = document.createElement("input");
            input.type = "checkbox";
            td = document.createElement("td");
            td.appendChild(input);
            col = td;
            row.appendChild(col);
            rows.appendChild(row);
        })
    })
    let buy = document.querySelectorAll("#exercise button")[1];
    buy.addEventListener("click", () => {
        let checks = document.querySelectorAll("#exercise input");
        let indexes = [];
        Array.from(checks).map((c, i)=> {
            if(c.checked){
                indexes.push(i);
            }
        });
        let items = document.querySelectorAll("#exercise tr");
        let names = [];
        let sum = 0;
        let avgFactor = 0;
        for (let i = 0; i < indexes.length; i++) {
            let row = items[indexes[i]+1];
            names.push(row.children[1].children[0].textContent);
            sum += Number(row.children[2].children[0].textContent);
            avgFactor += Number(row.children[3].children[0].textContent);
        }
        avgFactor /= indexes.length;
        if(Number.isNaN(avgFactor)) {
            avgFactor = 0;
        }
        let textbox = document.querySelectorAll("#exercise textarea")[1];
        textbox.value = `Bought furniture: ${names.join(", ")}\nTotal price: ${sum.toFixed(2)}\nAverage decoration factor: ${avgFactor}`;
    })
}