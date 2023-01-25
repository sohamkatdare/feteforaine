const AJS = require('animejs')

AJS.anime({
  targets: 'logo-title .logo-title-path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  begin: function(anim) {
    document.querySelector('.logo-title>g>path').setAttribute("stroke", "#000");
    document.querySelector('.logo-title>g>path').setAttribute("fill", "none");
  },
  // delay: function(el, i) { return i * 250 },
})

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);