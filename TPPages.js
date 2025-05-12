
function hideOtherCards(clickedCardId) {
    const allCardIds = [
        "myCard", "myCard2",
        "myEuroCard", "myEuroCard2", "myEuroCard3", "myEuroCard4",
        "myAsiaCard", "myAsiaCard2", "myAsiaCard3", "myAsiaCard4", "myAsiaCard5", "myAsiaCard6",
        "myAfricaCard", "myAfricaCard2", "myAfricaCard3", "myAfricaCard4"
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

//America Button
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
        window.location.href = "/Pages/Cherokee.html"
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
        window.location.href = "/Pages/Inuktitut.html";
    }, 3500);
});

//Europe Button
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
        window.location.href = "/Pages/Greek.html";
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
        window.location.href = "/Pages/Cyrillic.html";
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
        window.location.href = "/Pages/Roman.html";
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
        window.location.href = "/Pages/Hebrew.html";
    }, 3500);
});

//Asia Button
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
        window.location.href = "/Pages/Chinese.html";
    }, 3500);
});

document.querySelector("#myAsiaCard2").addEventListener("click", function() {

    hideOtherCards("myAsiaCard2");
    

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
        window.location.href = "/Pages/Georgian.html";
    }, 3500);
});

document.querySelector("#myAsiaCard3").addEventListener("click", function() {

    hideOtherCards("myAsiaCard3");
    

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
        window.location.href = "/Pages/Tibetan.html";
    }, 3500);
});

document.querySelector("#myAsiaCard4").addEventListener("click", function() {

    hideOtherCards("myAsiaCard4");
    

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
        window.location.href = "/Pages/Japanese.html";
    }, 3500);
});

document.querySelector("#myAsiaCard5").addEventListener("click", function() {

    hideOtherCards("myAsiaCard5");
    

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
        window.location.href = "/Pages/Mongolian.html";
    }, 3500);
});

document.querySelector("#myAsiaCard6").addEventListener("click", function() {

    hideOtherCards("myAsiaCard6");
    

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
        window.location.href ="/Pages/Korean.html";
    }, 3500);
});

//Africa Button
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
        window.location.href = "/Pages/Arabic.html";
    }, 3500);
});

document.querySelector("#myAfricaCard2").addEventListener("click", function() {

    hideOtherCards("myAfricaCard2");
    

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

document.querySelector("#myAfricaCard3").addEventListener("click", function() {

    hideOtherCards("myAfricaCard3");
    

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

document.querySelector("#myAfricaCard4").addEventListener("click", function() {

    hideOtherCards("myAfricaCard4");
    

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