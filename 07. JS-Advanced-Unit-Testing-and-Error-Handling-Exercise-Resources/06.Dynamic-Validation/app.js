function validate() {
    let email = document.getElementById("email");
    email.addEventListener("change", ()=>{
        let reg = new RegExp("[\\w]+@[\\w]+\\.[\\w]+")
        console.log(email.value.match(reg))
        if(email.value.match(reg)==null){
            email.className = "error";
        }else{
            email.className = "";
        }
    })
}