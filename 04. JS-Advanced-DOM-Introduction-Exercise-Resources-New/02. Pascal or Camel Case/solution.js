function solve() {
  let text = document.getElementById('text').value;
  let naming = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');
  text = text.toLowerCase();
   if(naming === "Pascal Case"){
       result.innerHTML = text.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
           return word.toUpperCase();
       }).replace(/\s+/g, '')
   } else if(naming === "Camel Case"){
       result.innerHTML = text.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
           return index === 0 ? word.toLowerCase() : word.toUpperCase();
       }).replace(/\s+/g, '')
   }else{
        result.innerHTML = "Error!";
   }
}