const icon = document.querySelector("#icon")
const menu = document.querySelector("#menu")
const muna = document.querySelector("#muna")


icon.addEventListener("click",()=>{
    menu.style.display = "flex";
    muna.style.display = "block"
    icon.style.display = "none"
})

muna.addEventListener("click", ()=>{
    menu.style.display = "none";
    muna.style.display = "none"
    icon.style.display = "block"
})