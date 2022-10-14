function solve() {
    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
    })
    let add = document.getElementById("add");
    let task = document.getElementById("task");
    let description = document.getElementById("description");
    let date = document.getElementById("date");
    add.addEventListener("click", () => {
        let artcle = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.textContent = task.value;
        let desc = document.createElement("p");
        desc.textContent = "Description: " + description.value;
        let datee = document.createElement("p");
        datee.textContent = "Due Date: "+date.value;
        let flex = document.createElement("div");
        flex.className = "flex";
        let start = document.createElement("button");
        let del = document.createElement("button");
        start.className = "green";
        start.textContent = "Start"
        del.className = "red";
        del.textContent = "Delete"
        del.addEventListener("click", (e) =>{
            e.path[2].remove();
        })
        start.addEventListener("click", (e) => {
            let pat = e.path[2];
            let flex = document.createElement("div");
            flex.className = "flex";
            let finish = document.createElement("button");
            let del = document.createElement("button");
            finish.className = "orange";
            finish.textContent = "Finish"
            finish.addEventListener("click", (event) => {
                let art = event.path[2];
                event.path[2].remove();
                art.removeChild(art.children[3])
                document.querySelector(".wrapper")
                    .children[3]
                    .children[1]
                    .appendChild(art);
            })
            del.className = "red";
            del.textContent = "Delete"
            e.path[2].remove();
            flex.appendChild(finish);
            flex.appendChild(del);
            pat.removeChild(pat.children[3]);
            pat.appendChild(flex)
            document.querySelector(".wrapper")
                .children[2]
                .children[1]
                .appendChild(pat);
        })
        flex.appendChild(start);
        flex.appendChild(del);
        artcle.appendChild(h3);
        artcle.appendChild(desc);
        artcle.appendChild(datee);
        artcle.appendChild(flex);
        document.querySelector(".wrapper")
            .children[1]
            .children[1]
            .appendChild(artcle);
    })
}