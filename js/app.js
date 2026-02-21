function goTo(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

/* BOTÓN NO QUE HUYE */
const noBtn = document.getElementById("noBtn");
const btnGroup = document.querySelector(".btn-group");

function moveButton() {
    const maxX = btnGroup.clientWidth - noBtn.clientWidth;
    const maxY = btnGroup.clientHeight - noBtn.clientHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("touchstart", moveButton);

/* MODAL IMAGEN GRANDE */
const images = document.querySelectorAll(".gallery img");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

images.forEach(img => {
    img.addEventListener("click", () => {
        modal.classList.add("active");
        modalImg.src = img.src;
    });
});

modal.addEventListener("click", () => {
    modal.classList.remove("active");
});

/* CORAZONES FLOTANDO */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 10 + 15 + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 800);