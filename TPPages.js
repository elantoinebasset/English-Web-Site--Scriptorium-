document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", function() {
        // Créer un placeholder pour maintenir l'espace
        const placeholder = document.createElement('div');
        placeholder.style.width = this.offsetWidth + 'px';
        placeholder.style.height = this.offsetHeight + 'px';
        placeholder.style.display = 'inline-block';
        this.parentNode.insertBefore(placeholder, this);
        
        
        this.style.transform = "scale(5.0)";
        this.style.position = "fixed";
        this.style.top = "35%";
        this.style.left = "35%";
        this.style.transition = "transform 3s ease-in-out";
        this.style.zIndex = "1000";
        
        setTimeout(() => {
            window.location.href = "/Pages/China.html";
        }, 5000);
    });
});