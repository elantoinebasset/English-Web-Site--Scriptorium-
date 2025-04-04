document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", function() {

        const placeholder = document.createElement('div');
        placeholder.style.width = this.offsetWidth + 'px';
        placeholder.style.height = this.offsetHeight + 'px';
        placeholder.style.display = 'inline-block';
        placeholder.style.position = 'absolute';
        this.parentNode.insertBefore(placeholder, this);


            this.style.top = "50%"; 
            this.style.left = "45%";



        setTimeout(() => {
            this.style.transform = "scale(5.0)";
            this.style.position = "fixed";
            this.style.transition = "transform 2s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
            this.style.zIndex = "1000";
        }, 200);  

        setTimeout(() => {
            window.location.href = "/Pages/China.html";
        }, 5000);
    });
});
