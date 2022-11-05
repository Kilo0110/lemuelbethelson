swiper.on('activeIndexChange', () => {
  const slides = document.querySelector('.swiper-wrapper')
  const activeSlide = slides.querySelector('.swiper-slide-active')
  const index = Array
    .from(activeSlide.parentElement.children)
    .indexOf(activeSlide) - 1;
  console.log(index);

  // let previousViewedSlide = slides[swiper.previousIndex]
  // let currentViewingSlide = slides[swiper.realIndex + 1]
  // previousViewedSlide.classList.remove('animate')
  // currentViewingSlide.classList.add('animate')
})

window.addEventListener('load', () => {
  const slides = document.querySelectorAll('.swiper-slide')

  let currentViewingSlide = slides[swiper.realIndex + 1]
  currentViewingSlide.classList.add('animate')
})

