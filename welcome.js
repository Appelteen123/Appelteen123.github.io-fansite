const yesButton = document.querySelector("#yes-button");
const noButton = document.querySelector("#no-button");
const accessMessage = document.querySelector("#access-message");

yesButton.addEventListener("click", function () {
    const isOlderThanSixteen = true;

    if (isOlderThanSixteen) {
        window.location.href = "seasons.html";
    } else {
        window.location.href = "access-denied.html";
    }
});

noButton.addEventListener("click", function () {
    const isOlderThanSixteen = false;

    if (isOlderThanSixteen) {
        window.location.href = "seasons.html";
    } else {
        window.location.href = "access-denied.html";
    }
});