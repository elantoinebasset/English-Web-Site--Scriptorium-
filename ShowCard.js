
const cardsState = {
    america: false,
    europe: false,
    asia: false,
    africa: false
};

// America Button
document.querySelector(".ButtonMap").addEventListener("click", function () {
    if (cardsState.america) {

        hideAllCards();
        cardsState.america = false;
    } else {

        hideAllCards();
        
        document.getElementById("myCard").classList.add("show-card");
        document.getElementById("myCard").classList.remove("hide-card");

        setTimeout(function () {
            document.getElementById("myCard2").classList.add("show-card");
            document.getElementById("myCard2").classList.remove("hide-card");
        }, 100);
        

        resetCardStates();
        cardsState.america = true;
    }
});

// Europe Button
document.querySelector(".ButtonMapEurope").addEventListener("click", function () {
    if (cardsState.europe) {

        hideAllCards();
        cardsState.europe = false;
    } else {

        hideAllCards();
        
        document.getElementById("myEuroCard").classList.add("show-card");
        document.getElementById("myEuroCard").classList.remove("hide-card");

        setTimeout(function () {
            document.getElementById("myEuroCard2").classList.add("show-card");
            document.getElementById("myEuroCard2").classList.remove("hide-card");
        }, 200);

        setTimeout(function () {
            document.getElementById("myEuroCard3").classList.add("show-card");
            document.getElementById("myEuroCard3").classList.remove("hide-card");
        }, 300);

        setTimeout(function () {
            document.getElementById("myEuroCard4").classList.add("show-card");
            document.getElementById("myEuroCard4").classList.remove("hide-card");
        }, 400);
        

        resetCardStates();
        cardsState.europe = true;
    }
});

// Asia Button
document.querySelector(".ButtonMapAsia").addEventListener("click", function () {
    if (cardsState.asia) {

        hideAllCards();
        cardsState.asia = false;
    } else {

        hideAllCards();
        
        document.getElementById("myAsiaCard").classList.add("show-card");
        document.getElementById("myAsiaCard").classList.remove("hide-card");

        setTimeout(function () {
            document.getElementById("myAsiaCard2").classList.add("show-card");
            document.getElementById("myAsiaCard2").classList.remove("hide-card");
        }, 100);

        setTimeout(function () {
            document.getElementById("myAsiaCard3").classList.add("show-card");
            document.getElementById("myAsiaCard3").classList.remove("hide-card");
        }, 200);

        setTimeout(function () {
            document.getElementById("myAsiaCard4").classList.add("show-card");
            document.getElementById("myAsiaCard4").classList.remove("hide-card");
        }, 300);

        setTimeout(function () {
            document.getElementById("myAsiaCard5").classList.add("show-card");
            document.getElementById("myAsiaCard5").classList.remove("hide-card");
        }, 400);

        setTimeout(function () {
            document.getElementById("myAsiaCard6").classList.add("show-card");
            document.getElementById("myAsiaCard6").classList.remove("hide-card");
        }, 500);
        

        resetCardStates();
        cardsState.asia = true;
    }
});

// Africa Button
document.querySelector(".ButtonMapAfrica").addEventListener("click", function () {
    if (cardsState.africa) {

        hideAllCards();
        cardsState.africa = false;
    } else {

        hideAllCards();
        
        document.getElementById("myAfricaCard").classList.add("show-card");
        document.getElementById("myAfricaCard").classList.remove("hide-card");

        setTimeout(function () {
            document.getElementById("myAfricaCard2").classList.add("show-card");
            document.getElementById("myAfricaCard2").classList.remove("hide-card");
        }, 100);

        setTimeout(function () {
            document.getElementById("myAfricaCard3").classList.add("show-card");
            document.getElementById("myAfricaCard3").classList.remove("hide-card");
        }, 200);

        setTimeout(function () {
            document.getElementById("myAfricaCard4").classList.add("show-card");
            document.getElementById("myAfricaCard4").classList.remove("hide-card");
        }, 300);

        resetCardStates();
        cardsState.africa = true;
    }
});

const allCardIds = [
    "myCard", "myCard2",
    "myEuroCard", "myEuroCard2", "myEuroCard3", "myEuroCard4",
    "myAsiaCard", "myAsiaCard2", "myAsiaCard3", "myAsiaCard4", "myAsiaCard5", "myAsiaCard6",
    "myAfricaCard", "myAfricaCard2", "myAfricaCard3", "myAfricaCard4",
];

function hideAllCards() {
    allCardIds.forEach(id => {
        const remove = document.getElementById(id);
        remove.classList.remove("show-card");
        remove.classList.add("hide-card");
    });
}


function resetCardStates() {
    cardsState.america = false;
    cardsState.europe = false;
    cardsState.asia = false;
    cardsState.africa = false;
}