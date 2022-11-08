const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const fadeOptions = {
  threshold: 0,
};

const fadeInOnLoad = new IntersectionObserver(function (entries, fadeInOnLoad) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('fade');
      fadeInOnLoad.unobserve(entry.target);
    }
  });
}, fadeOptions);

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      // appearOnScroll.unobserve(entry.target);
    }
  });
});

faders.forEach((fader) => {
  fadeInOnLoad.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
