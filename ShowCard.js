document.querySelector(".ButtonMap").addEventListener("click", function() {
    document.getElementById("myCard").classList.toggle("show-card");
});

document.querySelector(".ButtonMapEurope").addEventListener("click", function() {
    document.getElementById("myEuroCard").classList.toggle("show-card");
});

document.querySelector(".ButtonMapAsia").addEventListener("click", function() {
    document.getElementById("myAsiaCard").classList.toggle("show-card");
});

document.querySelector(".ButtonMapAfrica").addEventListener("click", function() {
    document.getElementById("myAfricaCard").classList.toggle("show-card");
});


const cards = {
    myCard: "ButtonMap",
    myEuroCard: "ButtonMapEurope",
    myAsiaCard: "ButtonMapAsia",
    myAfricaCard: "ButtonMapAfrica"
};

function showOnlyCard(visibleCardId) {
    Object.keys(cards).forEach(cardId => {
        const card = document.getElementById(cardId);
        if (cardId === visibleCardId) {
            card.classList.add("show-card");
            card.classList.remove("hide-card");
        } else {
            card.classList.remove("show-card");
            card.classList.add("hide-card");
        }
    });
}


Object.entries(cards).forEach(([cardId, buttonClass]) => {
    document.querySelector(`.${buttonClass}`).addEventListener("click", () => {
        showOnlyCard(cardId);
    });
});