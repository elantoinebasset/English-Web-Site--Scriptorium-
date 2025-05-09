document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    let isPetalsVisible = true;
    const nbPetals = 25;
    let petals = [];
    
    const petalSVG = `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10 C70 20, 90 40, 50 90 C10 40, 30 20, 50 10" fill="#ffccee" stroke="#ff99cc" stroke-width="2"/>
        </svg>
    `;
    
    // Ajouter un style pour les pétales et le conteneur
    const style = document.createElement('style');
    style.textContent = `
        #petal-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1000;
            overflow: hidden;
        }
        .petal {
            position: absolute;
            width: 50px;
            height: 50px;
            pointer-events: none;
        }
        #toggleButton {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1001;
            padding: 10px 15px;
            background-color: #ff99cc;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            pointer-events: auto;
        }
    `;
    document.head.appendChild(style);
    

    function createPetals() {

        petalContainer = document.createElement("div");
        petalContainer.id = "petal-container";
        document.body.appendChild(petalContainer);
        
        petals = [];
        

        for (let i = 0; i < nbPetals; i++) {
            const petal = document.createElement("div");
            petal.classList.add("petal");
            petal.innerHTML = petalSVG;
            petal.style.left = `${Math.random() * window.innerWidth}px`;
            petal.style.top = `${-Math.random() * 100}px`; // 
            petalContainer.appendChild(petal);
            

            const rotation = Math.random() * 360;
            petal.style.transform = `rotate(${rotation}deg)`;
            
            // Stocke les informations de chaque pétale
            petals.push({
                el: petal,
                x: parseFloat(petal.style.left),
                y: parseFloat(petal.style.top),
                speed: 0.5 + Math.random() * 1.5,
                rotation: rotation,
                rotationSpeed: (Math.random() - 0.5) * 2,
                size: 50 // Taille approximative du pétale en pixels
            });
        }
        

        animate();
    }
    
    function removePetals() {
        if (petalContainer) {
            petalContainer.remove();
            petalContainer = null;
        }
        
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
    }
    
    function animate() {
        const viewportHeight = window.innerHeight;
        
        for (let obj of petals) {
            obj.y += obj.speed;
            obj.x += Math.sin(obj.y / 50) * 0.5;
            obj.rotation += obj.rotationSpeed;
            
            if (obj.y > viewportHeight + obj.size) {
                obj.y = -obj.size;
                obj.x = Math.random() * window.innerWidth;
            }
            
            obj.el.style.top = `${obj.y}px`;
            obj.el.style.left = `${obj.x}px`;
            obj.el.style.transform = `rotate(${obj.rotation}deg)`;
        }
        
        animationFrameId = requestAnimationFrame(animate);
    }
    
    createPetals();
    
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            if (isPetalsVisible) {
                removePetals();
                toggleButton.textContent = 'Afficher les Pétales';
            } else {
                createPetals();
                toggleButton.textContent = 'Masquer les Pétales';
            }
            isPetalsVisible = !isPetalsVisible;
        });
    }
});