document.addEventListener('DOMContentLoaded', function() {
    const nbPetals = 25;
    const petals = [];
    

    const petalSVG = `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10 C70 20, 90 40, 50 90 C10 40, 30 20, 50 10" fill="#ffccee" stroke="#ff99cc" stroke-width="2"/>
        </svg>
    `;
    
    for (let i = 0; i < nbPetals; i++) {
        const petal = document.createElement("div");
        petal.classList.add("petal");
        petal.innerHTML = petalSVG;
        petal.style.left = `${Math.random() * window.innerWidth}px`;
        petal.style.top = `${-Math.random() * 10}px`;
        document.body.appendChild(petal);
        

        const rotation = Math.random() * 360;
        petal.style.transform = `rotate(${rotation}deg)`;
        
        petals.push({
            el: petal,
            x: parseFloat(petal.style.left),
            y: parseFloat(petal.style.top),
            speed: 0.5 + Math.random() * 1.5,
            rotation: rotation,
            rotationSpeed: (Math.random() - 0.5) * 2
        });
    }
    

    function animate() {
        for (let obj of petals) {
            obj.y += obj.speed;
            obj.x += Math.sin(obj.y / 50) * 0.5;
            obj.rotation += obj.rotationSpeed;
            
            if (obj.y > window.innerHeight) {
                obj.y = -50;
                obj.x = Math.random() * window.innerWidth;
            }
            
            obj.el.style.top = `${obj.y}px`;
            obj.el.style.left = `${obj.x}px`;
            obj.el.style.transform = `rotate(${obj.rotation}deg)`;
        }
        requestAnimationFrame(animate);
    }
    
    animate();
});
