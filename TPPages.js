
function hideOtherCards(clickedCardId) {
    const allCardIds = [
        "myCard", "myCard2",
        "myEuroCard", "myEuroCard2", "myEuroCard3", "myEuroCard4",
        "myAsiaCard", "myAfricaCard"
    ];
    
    allCardIds.forEach(id => {
        if (id !== clickedCardId) {
            const card = document.getElementById(id);
            if (card) {
                card.style.opacity = "0";
                card.style.transition = "opacity 0.5s ease";
                card.style.pointerEvents = "none"; 
            }
        }
    });
}


document.querySelector("#myCard").addEventListener("click", function() {

    hideOtherCards("myCard");

    const placeholder = document.createElement('div');
    placeholder.style.width = this.offsetWidth + 'px';
    placeholder.style.height = this.offsetHeight + 'px';
    placeholder.style.display = 'inline-block';
    placeholder.style.position = 'absolute';
    this.parentNode.insertBefore(placeholder, this);

    this.style.top = "43%"; 
    this.style.left = "45%";

    setTimeout(() => {
        this.style.transform = "scale(5.0)";
        this.style.position = "fixed";
        this.style.transition = "transform 2s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
        this.style.zIndex = "1000";
    }, 200);  

    setTimeout(() => {
        window.location.href = "/Pages/NorthAmerica.html";
    }, 3500);
});

document.querySelector("#myCard2").addEventListener("click", function() {

    hideOtherCards("myCard2");

    const placeholder = document.createElement('div');
    placeholder.style.width = this.offsetWidth + 'px';
    placeholder.style.height = this.offsetHeight + 'px';
    placeholder.style.display = 'inline-block';
    placeholder.style.position = 'absolute';
    this.parentNode.insertBefore(placeholder, this);

    this.style.top = "43%"; 
    this.style.left = "45%";

    setTimeout(() => {
        this.style.transform = "scale(5.0)";
        this.style.position = "fixed";
        this.style.transition = "transform 2s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
        this.style.zIndex = "1000";
    }, 200);  

    setTimeout(() => {
        window.location.href = "/Pages/NorthAmerica.html";
    }, 3500);
});


document.querySelector("#myEuroCard").addEventListener("click", function() {

    hideOtherCards("myEuroCard");

    const placeholder = document.createElement('div');
    placeholder.style.width = this.offsetWidth + 'px';
    placeholder.style.height = this.offsetHeight + 'px';
    placeholder.style.display = 'inline-block';
    placeholder.style.position = 'absolute';
    this.parentNode.insertBefore(placeholder, this);

    this.style.top = "43%"; 
    this.style.left = "45%";

    setTimeout(() => {
        this.style.transform = "scale(5.0)";
        this.style.position = "fixed";
        this.style.transition = "transform 2s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
        this.style.zIndex = "1000";
    }, 200);  

    setTimeout(() => {
        window.location.href = "/Pages/China.html";
    }, 3500);
});

document.querySelector("#myEuroCard2").addEventListener("click", function() {

    hideOtherCards("myEuroCard2");

    const placeholder = document.createElement('div');
    placeholder.style.width = this.offsetWidth + 'px';
    placeholder.style.height = this.offsetHeight + 'px';
    placeholder.style.display = 'inline-block';
    placeholder.style.position = 'absolute';
    this.parentNode.insertBefore(placeholder, this);

    this.style.top = "43%"; 
    this.style.left = "45%";

    setTimeout(() => {
        this.style.transform = "scale(5.0)";
        this.style.position = "fixed";
        this.style.transition = "transform 2s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
        this.style.zIndex = "1000";
    }, 200);  

    setTimeout(() => {
        window.location.href = "/Pages/China.html";
    }, 3500);
});

document.querySelector("#myEuroCard3").addEventListener("click", function() {

    hideOtherCards("myEuroCard3");
    

    const placeholder = document.createElement('div');
    placeholder.style.width = this.offsetWidth + 'px';
    placeholder.style.height = this.offsetHeight + 'px';
    placeholder.style.display = 'inline-block';
    placeholder.style.position = 'absolute';
    this.parentNode.insertBefore(placeholder, this);

    this.style.top = "43%"; 
    this.style.left = "45%";

    setTimeout(() => {
        this.style.transform = "scale(5.0)";
        this.style.position = "fixed";
        this.style.transition = "transform 2s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
        this.style.zIndex = "1000";
    }, 200);  

    setTimeout(() => {
        window.location.href = "/Pages/China.html";
    }, 3500);
});

document.querySelector("#myEuroCard4").addEventListener("click", function() {

    hideOtherCards("myEuroCard4");
    

    const placeholder = document.createElement('div');
    placeholder.style.width = this.offsetWidth + 'px';
    placeholder.style.height = this.offsetHeight + 'px';
    placeholder.style.display = 'inline-block';
    placeholder.style.position = 'absolute';
    this.parentNode.insertBefore(placeholder, this);

    this.style.top = "43%"; 
    this.style.left = "45%";

    setTimeout(() => {
        this.style.transform = "scale(5.0)";
        this.style.position = "fixed";
        this.style.transition = "transform 2s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
        this.style.zIndex = "1000";
    }, 200);  

    setTimeout(() => {
        window.location.href = "/Pages/China.html";
    }, 3500);
});


document.querySelector("#myAsiaCard").addEventListener("click", function() {

    hideOtherCards("myAsiaCard");
    

    const placeholder = document.createElement('div');
    placeholder.style.width = this.offsetWidth + 'px';
    placeholder.style.height = this.offsetHeight + 'px';
    placeholder.style.display = 'inline-block';
    placeholder.style.position = 'absolute';
    this.parentNode.insertBefore(placeholder, this);

    this.style.top = "43%"; 
    this.style.left = "45%";

    setTimeout(() => {
        this.style.transform = "scale(5.0)";
        this.style.position = "fixed";
        this.style.transition = "transform 2s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
        this.style.zIndex = "1000";
    }, 200);  

    setTimeout(() => {
        window.location.href = "/Pages/China.html";
    }, 3500);
});


document.querySelector("#myAfricaCard").addEventListener("click", function() {

    hideOtherCards("myAfricaCard");
    

    const placeholder = document.createElement('div');
    placeholder.style.width = this.offsetWidth + 'px';
    placeholder.style.height = this.offsetHeight + 'px';
    placeholder.style.display = 'inline-block';
    placeholder.style.position = 'absolute';
    this.parentNode.insertBefore(placeholder, this);

    this.style.top = "43%"; 
    this.style.left = "45%";

    setTimeout(() => {
        this.style.transform = "scale(5.0)";
        this.style.position = "fixed";
        this.style.transition = "transform 2s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
        this.style.zIndex = "1000";
    }, 200);  

    setTimeout(() => {
        window.location.href = "/Pages/China.html";
    }, 3500);
});