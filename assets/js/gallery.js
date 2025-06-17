document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery-grid');
    const prevBtn = document.querySelector('.gallery-nav.prev');
    const nextBtn = document.querySelector('.gallery-nav.next');
    
    // Array of all images
       const images = [
        { src: 'assets/images/01.jpg' },
        { src: 'assets/images/1.jpg' },
        { src: 'assets/images/02.jpg'},
        { src: 'assets/images/03.jpg'},
        { src: 'assets/images/04.jpg'},
        { src: 'assets/images/05.jpg'},
        { src: 'assets/images/06.jpg'},
        { src: 'assets/images/07.jpg'},
        { src: 'assets/images/08.jpg'},
        { src: 'assets/images/09.jpg'},
        { src: 'assets/images/010.jpg'},
        { src: 'assets/images/011.jpg'},
        { src: 'assets/images/012.jpg'},
        { src: 'assets/images/013.jpg'},
        { src: 'assets/images/014.jpg'},
        { src: 'assets/images/015.jpg'},
        { src: 'assets/images/016.jpg'},
        { src: 'assets/images/017.jpg'},
        { src: 'assets/images/018.jpg'},
        { src: 'assets/images/019.jpg'},
        { src: 'assets/images/020.jpg'},
        { src: 'assets/images/021.jpg'},
        { src: 'assets/images/022.jpg'},
        { src: 'assets/images/0023.jpg'},
        { src: 'assets/images/023.jpg'},
        { src: 'assets/images/024.jpg'},
        { src: 'assets/images/025.jpg'},
        { src: 'assets/images/026.jpg'},
        { src: 'assets/images/027.jpg'},
        { src: 'assets/images/029.jpg'},
        { src: 'assets/images/030.jpg'},
        { src: 'assets/images/031.jpg'},
        { src: 'assets/images/032.jpg'},
        { src: 'assets/images/033.jpg'},
        { src: 'assets/images/034.jpg'},
        { src: 'assets/images/035.jpg'},
        { src: 'assets/images/036.jpg'},
        { src: 'assets/images/037.jpg'},
        { src: 'assets/images/038.jpg'},
        { src: 'assets/images/039.jpg'},
        { src: 'assets/images/040.jpg'},
        { src: 'assets/images/041.jpg'},
        { src: 'assets/images/042.jpg'}

    ];

    let currentIndex = 0;
    let items = [];
    const radius = 300; // Reduced radius for tighter circular path
    const totalImages = images.length;

    function createGalleryItems() {
        gallery.innerHTML = '';
        items = [];
        
        images.forEach((img, index) => {
            const div = document.createElement('div');
            div.className = 'gallery-item';
            if (index === currentIndex) div.classList.add('active');
            
            const imgElement = document.createElement('img');
            imgElement.src = img.src;
            imgElement.alt = img.alt;
            imgElement.loading = 'lazy';
            
            div.appendChild(imgElement);
            gallery.appendChild(div);
            items.push(div);
        });

        updatePositions();
    }

    function updatePositions() {
        items.forEach((item, index) => {
            const angle = ((index - currentIndex) * (360 / totalImages)) * (Math.PI / 180);
            const x = Math.sin(angle) * radius;
            const z = Math.cos(angle) * radius;
            const scale = (z + radius) / (2 * radius) * 0.8; // Reduced scale factor
            
            item.style.transform = `translate3d(${x}px, 0, ${z}px) scale(${scale})`;
            item.style.opacity = scale * 1.2; // Increased opacity for better visibility
            
            // Update active state
            item.classList.toggle('active', index === currentIndex);
        });
    }

    function rotateGallery(direction) {
        currentIndex = (currentIndex + direction + totalImages) % totalImages;
        updatePositions();
    }

    // Initialize gallery
    createGalleryItems();

    // Event listeners
    prevBtn.addEventListener('click', () => rotateGallery(-1));
    nextBtn.addEventListener('click', () => rotateGallery(1));

    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;

    gallery.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    gallery.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchEndX < touchStartX) rotateGallery(1); // Swipe left
        if (touchEndX > touchStartX) rotateGallery(-1); // Swipe right
    });

    // Keyboard support
    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft') rotateGallery(-1);
        if (e.key === 'ArrowRight') rotateGallery(1);
    });

    // Auto rotation
    let autoRotateInterval;

    function startAutoRotate() {
        autoRotateInterval = setInterval(() => rotateGallery(1), 1500);
    }

    function stopAutoRotate() {
        clearInterval(autoRotateInterval);
    }

    startAutoRotate();

    // Pause on hover
    gallery.addEventListener('mouseenter', stopAutoRotate);
    gallery.addEventListener('mouseleave', startAutoRotate);
    // Music setup
    const galleryMusic = document.getElementById('gallery-music');
    let musicStarted = false;
    function playMusic() {
        if (galleryMusic && !musicStarted) {
            galleryMusic.volume = 0.5;
            galleryMusic.play();
            musicStarted = true;
        }
    }
    // Play music on first gallery interaction
    prevBtn.addEventListener('click', playMusic);
    nextBtn.addEventListener('click', playMusic);
    gallery.addEventListener('touchstart', playMusic);
    // Optionally, play on auto-rotate
    setTimeout(playMusic, 2000);
});
