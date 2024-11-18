// script.js
function changeText() {
    const welcomeText = document.getElementById("welcome-text");
    const button = document.getElementById("change-text-btn");
    
    // Change text content
    welcomeText.innerText = "JavaScript is Dynamic and Fun!";
    
    // Add a pulsating animation
    welcomeText.classList.add("pulse-animation");
    
    // Change button color randomly
    button.style.backgroundColor = getRandomColor();
  
  // Create particles
  createParticles(event.clientX, event.clientY);
}

function createParticles(x, y) {
    const particlesContainer = document.getElementById("particles-container");
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        const size = Math.random() * 10 + 5; // Random size
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = getRandomColor();
        particle.style.position = 'absolute';
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        
        // Random direction
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 100;
        particle.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
        particle.style.setProperty('--y', `${Math.sin(angle) * distance}px`);
        
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation
        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    }
}
  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "JavaScript is the language of the web.",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Code is like humor. When you have to explain it, it’s bad. - Cory House"
  ];
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
  }
  func