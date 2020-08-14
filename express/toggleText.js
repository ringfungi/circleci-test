function toggleText() {
    var x = document.getElementById("textDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
module.exports = toggleText;