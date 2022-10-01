function create(words) {
   let space = document.getElementById("content")
   for (let i = 0; i < words.length; i++) {
      let div = space.appendChild(document.createElement('div'));
      let p = document.createElement('p');
      p.textContent = words[i];
      p.style.display = 'none';
      div.appendChild(p)
      div.addEventListener('click', function () {
         div.children[0].style.display = 'inline';
      });
   }
}