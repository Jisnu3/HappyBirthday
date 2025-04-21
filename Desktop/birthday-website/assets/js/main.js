// Add background animations
function createBackgroundAnimations() {
    const bgAnimation = document.createElement('div');
    bgAnimation.className = 'bg-animation';
    document.body.appendChild(bgAnimation);

    const bgGradient = document.createElement('div');
    bgGradient.className = 'bg-gradient';
    document.body.appendChild(bgGradient);

    // Create sparkles
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.top = Math.random() * 100 + 'vh';
        sparkle.style.animationDelay = Math.random() * 3 + 's';
        bgAnimation.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 3000);
    }

    // Create initial sparkles
    for(let i = 0; i < 30; i++) {
        setTimeout(createSparkle, i * 100);
    }

    // Continue creating sparkles
    setInterval(() => {
        createSparkle();
    }, 300);
}

// Call the function when page loads
document.addEventListener('DOMContentLoaded', () => {
    createBackgroundAnimations();
});

function createLargeHearts() {
    const positions = [
        { top: '20%', left: '10%' },
        { top: '60%', left: '80%' },
        { top: '40%', left: '50%' }
    ];

    positions.forEach((pos, index) => {
        const heart = document.createElement('div');
        heart.className = 'large-heart';
        heart.style.top = pos.top;
        heart.style.left = pos.left;
        heart.style.animationDelay = `${index * 0.5}s`;
        document.querySelector('.bg-animation').appendChild(heart);
    });
}

// Add this to your existing DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    createLargeHearts();
});

// Gallery Auto-scroll and Navigation
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery-grid');
    const prevBtn = document.querySelector('.gallery-nav.prev');
    const nextBtn = document.querySelector('.gallery-nav.next');
    let autoScrollInterval;

    function scrollGallery(direction) {
        const scrollAmount = 300; // Width of one image
        gallery.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    }

    // Auto scroll
    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            if (gallery.scrollLeft >= (gallery.scrollWidth - gallery.clientWidth)) {
                gallery.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scrollGallery(1);
            }
        }, 3000); // Scroll every 3 seconds
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    // Navigation buttons
    prevBtn.addEventListener('click', () => {
        scrollGallery(-1);
        stopAutoScroll();
        setTimeout(startAutoScroll, 5000);
    });

    nextBtn.addEventListener('click', () => {
        scrollGallery(1);
        stopAutoScroll();
        setTimeout(startAutoScroll, 5000);
    });

    // Start auto-scrolling
    startAutoScroll();

    // Pause auto-scroll when hovering over gallery
    gallery.addEventListener('mouseenter', stopAutoScroll);
    gallery.addEventListener('mouseleave', startAutoScroll);
});
// Gallery Auto-scroll and Navigation
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery-grid');
    const prevBtn = document.querySelector('.gallery-nav.prev');
    const nextBtn = document.querySelector('.gallery-nav.next');
    let autoScrollInterval;

    function scrollGallery(direction) {
        const scrollAmount = 300; // Width of one image
        gallery.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    }

    // Auto scroll
    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            if (gallery.scrollLeft >= (gallery.scrollWidth - gallery.clientWidth)) {
                gallery.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scrollGallery(1);
            }
        }, 3000); // Scroll every 3 seconds
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    // Navigation buttons
    prevBtn.addEventListener('click', () => {
        scrollGallery(-1);
        stopAutoScroll();
        setTimeout(startAutoScroll, 5000);
    });

    nextBtn.addEventListener('click', () => {
        scrollGallery(2);
        stopAutoScroll();
        setTimeout(startAutoScroll, 5000);
    });

    // Start auto-scrolling
    startAutoScroll();

    // Pause auto-scroll when hovering over gallery
    gallery.addEventListener('mouseenter', stopAutoScroll);
    gallery.addEventListener('mouseleave', startAutoScroll);
});

// Add this code after your existing DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    const wishInput = document.getElementById('wish-input');
    const addWishButton = document.getElementById('add-wish');
    const wishesWall = document.getElementById('wishes-wall');

    addWishButton.addEventListener('click', function() {
        if (wishInput.value.trim() !== '') {
            const wishCard = document.createElement('div');
            wishCard.className = 'wish-card';
            
            const wishText = document.createElement('p');
            wishText.textContent = wishInput.value;
            
            const wishDate = document.createElement('span');
            wishDate.className = 'wish-date';
            wishDate.textContent = new Date().toLocaleDateString();
            
            wishCard.appendChild(wishText);
            wishCard.appendChild(wishDate);
            wishesWall.insertBefore(wishCard, wishesWall.firstChild);
            
            wishInput.value = '';
        }
    });
});

// Add this code after your existing code
document.addEventListener('DOMContentLoaded', function() {
    const meterFill = document.querySelector('.meter-fill');
    const meterText = document.querySelector('.meter-text');
    
    function updateLoveMeter() {
        let progress = 0;
        const interval = setInterval(() => {
            progress += 1;
            meterFill.style.width = `${progress}%`;
            meterText.textContent = `${progress}%`;
            
            if (progress >= 100) {
                clearInterval(interval);
                meterText.textContent = '100% Pure Love! ❤️';
            }
        }, 50);
    }
    
    updateLoveMeter();
});

// Add this code after your existing code
document.addEventListener('DOMContentLoaded', function() {
    const revealGiftBtn = document.getElementById('reveal-gift');
    const giftReveal = document.getElementById('gift-reveal');
    
    revealGiftBtn.addEventListener('click', function() {
        revealGiftBtn.disabled = true;
        giftReveal.innerHTML = '🎁 Opening your gift...';
        
        setTimeout(() => {
            giftReveal.innerHTML = `
                <div class="gift-appear">
                    <h3>🎉 Happy Birthday! 🎉</h3>
                    <p>Your special gift is a collection of our memories together!</p>
                    <div class="gift-image">🎁 💝 🎊</div>
                </div>
            `;
            revealGiftBtn.textContent = 'Gift Revealed!';
        }, 2000);
    });
});

// Add this code after your existing code
document.addEventListener('DOMContentLoaded', function() {
    const hugButton = document.getElementById('send-hug');
    const hugAnimation = document.getElementById('hug-animation');
    
    hugButton.addEventListener('click', function() {
        hugButton.disabled = true;
        hugAnimation.innerHTML = '🤗';
        hugAnimation.classList.add('hug-active');
        
        setTimeout(() => {
            hugAnimation.innerHTML += '<p>Hug received with love! 💖</p>';
            hugButton.disabled = false;
        }, 1000);
        
        setTimeout(() => {
            hugAnimation.classList.remove('hug-active');
        }, 2000);
    });
});
// Add this to your existing JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    const letters = [
        "Your smile lights up my world like a thousand stars in the night sky. Every time I see it, I fall in love all over again.",
        "The way you care for others with such genuine compassion makes my heart swell with pride and love.",
        "Your strength and determination inspire me every single day. You make me want to be a better person.",
        "The sound of your laughter is my favorite melody. It's the sweetest music I've ever heard.",
        "Your presence in my life is the greatest gift I could have ever asked for. You make every day magical."
    ];

    const letterContent = document.getElementById('letter-content');
    const nextLetterBtn = document.getElementById('next-letter');
    let currentLetterIndex = 0;

    function showLetter(index) {
        letterContent.classList.remove('active');
        setTimeout(() => {
            letterContent.textContent = letters[index];
            letterContent.classList.add('active');
        }, 500);
    }

    if (nextLetterBtn && letterContent) {
        showLetter(0);
        nextLetterBtn.addEventListener('click', () => {
            currentLetterIndex = (currentLetterIndex + 1) % letters.length;
            showLetter(currentLetterIndex);
        });
    }
});