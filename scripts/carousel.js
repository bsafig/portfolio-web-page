const carouselEl = document.querySelector('#smartCarousel');
const carousel = new bootstrap.Carousel(carouselEl, {
    interval: false,
    ride: false,
    pause: false,
    wrap: true
});

function getCurrentSlide() {
    return carouselEl.querySelector('.carousel-item.active');
}

function scheduleNextSlide(delay = 5000) {
    clearTimeout(window.carouselTimer);
    window.carouselTimer = setTimeout(() => {
        carousel.next();
    }, delay);
}

function stopAllVideos() {
    const videos = carouselEl.querySelectorAll('video');
    videos.forEach((video) => {
        video.pause();
        video.currentTime = 0;
        video.onended = null;
    });
}

function handleSlideChange() {
    stopAllVideos();
    const activeSlide = getCurrentSlide();

    if (activeSlide.dataset.type === 'video') {
        const video = activeSlide.querySelector('video');
        video.play();

        video.onended = () => {
            carousel.next();
        };
    } else {
        scheduleNextSlide();
    }
}

carouselEl.addEventListener('slid.bs.carousel', handleSlideChange);

window.addEventListener('DOMContentLoaded', () => {
    handleSlideChange();
});