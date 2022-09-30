function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let search = document.getElementById('searchField').value;
      let rows = document.querySelector('.container tbody').children;
      rows = Array.from(rows);
      for (let i = 0; i < rows.length; i++) {
         let row = rows[i];
         row.classList.remove('select');
         let children = Array.from(row.children);
         for (const rowElement of children) {
            if (rowElement.innerHTML.includes(search)){
               console.log(rowElement)
               row.classList.add('select');
            }
         }
      }
      console.log(rows[0].classList)
   }
}