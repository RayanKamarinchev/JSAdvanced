function notify(message) {
  let notif =  document.getElementById("notification")
  console.log(notif.style.display)
  notif.textContent = message;
  if (notif.style.display == "" || notif.style.display == "none") {
    notif.style.display = "block";
    notif.addEventListener("click", () =>{
      notif.style.display = "none";
    })
  }
}