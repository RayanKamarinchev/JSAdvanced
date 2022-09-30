function search() {
   let search = document.getElementById('searchText').value;
   let towns = document.getElementById('towns').children;
   let matches = 0;
   towns = Array.from(towns);
    for (const town of towns) {
        if (town.innerHTML.includes(search)) {
            matches++;
            town.style.textDecoration = 'underline';
            town.style.fontWeight = 'bold';
        }
    }
    document.getElementById('result').innerHTML = `${matches} matches found`;
}
