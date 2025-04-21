function createFloatingHearts() {
    const heart = document.createElement('div');
    heart.innerHTML = '♥';
    heart.className = 'floating-heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animationDuration = (Math.random() * 15 + 5) + 's';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 20000);
}

setInterval(createFloatingHearts, 300);

// Make a wish animation
document.getElementById('wish-button').addEventListener('click', () => {
    const button = document.getElementById('wish-button');
    button.disabled = true;
    button.innerHTML = '✨ Making your wish come true... ✨';
    
    setTimeout(() => {
        button.innerHTML = '🌟 Wish made! 🌟';
        createHeartBurst();
    }, 2000);
});

function createHeartBurst() {
    for(let i = 0; i < 20; i++) {
        setTimeout(() => createFloatingHearts(), i * 100);
    }
}