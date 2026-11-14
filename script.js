
const questionScreen = document.getElementById("questionScreen");
const loveScreen = document.getElementById("loveScreen");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const restartBtn = document.getElementById("restartBtn");

const petalsContainer = document.getElementById("petals");

// YES BUTTON
yesBtn.addEventListener("click", function () {

    // Hide question screen
    questionScreen.style.display = "none";

    // Show love screen
    loveScreen.classList.add("show");

    // Start falling flowers
    startPetals();

    // Apple Music is embedded below.
    // Its play button may still need to be pressed manually
    // because Apple controls playback inside its iframe.

});

// NO BUTTON
noBtn.addEventListener("click", function () {

    const messages = [
        "Are you sure? 🥺",
        "Please think again ❤️",
        "You are making me blush 🙈",
        "Give me a YES! 💕"
    ];

    const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

    noBtn.textContent = randomMessage;

});

// FALLING FLOWERS
function startPetals() {

    const flowers = ["🌸", "🌹", "🌺", "💮", "💕", "🌷"];

    // Avoid creating multiple sets if YES is clicked again
    if (petalsContainer.dataset.started === "true") {
        return;
    }

    petalsContainer.dataset.started = "true";

    setInterval(function () {

        const petal = document.createElement("span");

        petal.classList.add("petal");

        petal.textContent =
            flowers[Math.floor(Math.random() * flowers.length)];

        petal.style.left = Math.random() * 100 + "vw";

        petal.style.animationDuration =
            (Math.random() * 3 + 4) + "s";

        petal.style.fontSize =
            (Math.random() * 15 + 15) + "px";

        petalsContainer.appendChild(petal);

        setTimeout(function () {
            petal.remove();
        }, 8000);

    }, 350);

}

// RESTART BUTTON
restartBtn.addEventListener("click", function () {

    loveScreen.classList.remove("show");

    questionScreen.style.display = "flex";

    noBtn.textContent = "NO 🙈";

    petalsContainer.innerHTML = "";

    petalsContainer.dataset.started = "false";

});
