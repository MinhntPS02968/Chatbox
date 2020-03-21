function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
function popup() {
    var popup = document.getElementById("topup");
    popup.style.display ="inline-block";
    popup.style.transition = "height 0.5s";
    popup.style.width ="65px";
    popup.style.height ="300px";
}
function popout() {
    var popup = document.getElementById("topup");
    popup.style.width ="0";
    popup.style.height ="0";
}