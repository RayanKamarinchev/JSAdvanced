function generateReport() {
    let checkboxes = Array.from(document.querySelectorAll('thead tr')[0].children);
    let table = Array.from(document.querySelector('tbody').children);
    let categories = [];
    let indexes = [];
    for (let i = 0; i < checkboxes.length; i++) {
        categories.push(checkboxes[i].children[0].name)
        if (checkboxes[i].children[0].checked){
            indexes.push(i);
        }
    }
    debugger;
    let res = [];
    for (const row of table) {
        let obj = {};
        for (let i = 0; i < row.children.length; i++) {
            if(indexes.includes(i)){
                obj[categories[i]] = row.children[i].textContent;
            }
        }
        res.push(obj);
    }
    document.getElementById("output").textContent = JSON.stringify(res);
}