swiper.on('activeIndexChange', () => {
  const slideWrapper = document.querySelector('.swiper-wrapper')
  const swiperSlides = slideWrapper.querySelectorAll('.swiper-slide')
  let activeSlideIndex = swiper.activeIndex
  let activeSlide = slideWrapper.querySelectorAll('.swiper-slide')[activeSlideIndex]
  activeSlide.classList.add('animate')
  swiperSlides.forEach(slide => {
    if (slide !== activeSlide) {
      slide.classList.remove('animate')
    }
  });
})

window.addEventListener('load', () => {
  const slides = document.querySelectorAll('.swiper-slide')

  let activeSlide = slides[swiper.realIndex + 1]
  activeSlide.classList.add('animate')
})

const hamburgerBtn = document.querySelector('.hamburger-icon')
const closeMenuBtn = document.querySelector('.close-menu-icon')
const menu = document.querySelector('.nav__links-container')

hamburgerBtn.addEventListener('click', () => {
  menu.classList.add('show-menu')
  closeMenuBtn.classList.add('show-close-btn')
})

closeMenuBtn.addEventListener('click', () => {
  menu.classList.remove('show-menu')
  closeMenuBtn.classList.remove('show-close-btn')
})
