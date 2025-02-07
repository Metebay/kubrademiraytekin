// Lightbox Fonksiyonelliği
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-image');
    const captionTitle = document.querySelector('.caption-title');
    const captionText = document.querySelector('.caption-text');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    let currentIndex = 0;

    // Lightbox açma fonksiyonu
    function openLightbox(index) {
        currentIndex = index;
        updateLightbox();
        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Lightbox güncelleme fonksiyonu
    function updateLightbox() {
        const item = galleryItems[currentIndex];
        lightboxImg.src = item.querySelector('img').src;
        captionTitle.textContent = item.querySelector('h3').textContent;
        captionText.textContent = item.querySelector('p').textContent;
    }

    // Lightbox kapatma fonksiyonu
    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Olay dinleyicileri
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
    });

    closeBtn.addEventListener('click', closeLightbox);
    
    lightbox.addEventListener('click', (e) => {
        if(e.target === lightbox) closeLightbox();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        updateLightbox();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        updateLightbox();
    });

    // Klavye kontrolü
    document.addEventListener('keydown', (e) => {
        if(lightbox.style.display === 'block') {
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    prevBtn.click();
                    break;
                case 'ArrowRight':
                    nextBtn.click();
                    break;
            }
        }
    });
});