function solve() {
  let text = document.getElementById('input').value;
  let paragraphs = text.split('.').filter(p=>p.trim().length > 1);
  let out = "";
  let output = document.getElementById('output');
  for (let i = 0; i < paragraphs.length; i++) {
      out += paragraphs[i];
      if ((i+1) % 3 === 0) {
          let z = document.createElement('p'); // is a node
          z.innerHTML = out;
          output.appendChild(z);
          out = "";
      }
  }
  if(out.length>1) {
      let z = document.createElement('p'); // is a node
      z.innerHTML = out;
      output.appendChild(z);
  }
}