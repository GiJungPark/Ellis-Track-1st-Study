const swiper = new Swiper('.swiper', {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    //클릭 가능여부
    clickable: true,

  },

  autoplay: {
     delay: 5000,
   },



});