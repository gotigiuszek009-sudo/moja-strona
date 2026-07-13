
const popup = document.getElementById("popup");
const openBtn = document.getElementById("openPopup");
const closeBtn = document.querySelector(".close");

openBtn.onclick = () => popup.style.display = "flex";
closeBtn.onclick = () => popup.style.display = "none";

window.onclick = (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
};
function wyslijFormularz(event) {
    event.preventDefault();

    alert("Wiadomość wysłana! Skontaktujemy się z Tobą.");

    document.getElementById("popup").style.display = "none";
}
