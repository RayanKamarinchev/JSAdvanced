function lockedProfile() {
    let btns = document.querySelectorAll(".profile button");
    let arr = Array.from(btns);
    arr.forEach((b, i) => {
        b.addEventListener("click", () => {
            if (document.getElementsByName(`user${i + 1}Locked`)[0].checked) {
                return;
            }
            let info = document.getElementById(`user${i + 1}HiddenFields`);
            if (info.style.display === "block") {
                info.style.display = "none";
            } else {
                info.style.display = "block";
            }
        })
    })
}