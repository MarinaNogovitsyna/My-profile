let modal = document.getElementById("modal_window");
let btn = document.getElementById("open_modal");
let close = document.getElementById("close");
let firstPage = document.getElementById("first_page")

btn.onclick = function() {
    modal.style.display = "flex";
    firstPage.style.display = "none"
}

close.onclick = function() {
    modal.style.display = "none";
    firstPage.style.display = "flex"
}