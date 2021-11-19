document.addEventListener("DOMContentLoaded", function(event) { 
    const bannerFlkty = new Flickity('.js-banner-carousel', {
        autoPlay: 3000,
        prevNextButtons: false,
        wrapAround: true,
        pauseAutoPlayOnHover: true,
      });
    const enjoyFlkty = new Flickity('.js-enjoy-carousel', {
        autoPlay: 1000,
        prevNextButtons: false,
        wrapAround: true,
        pauseAutoPlayOnHover: true,
        pageDots: false,
        contain: true
    });
  });