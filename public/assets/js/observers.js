const faders = document.querySelectorAll('.fade-in');

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

faders.forEach((fader) => {
  fadeInOnLoad.observe(fader);
});
