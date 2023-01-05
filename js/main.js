const $wrapper = document.querySelector('.wrapper'),
  $logo = document.querySelector('#logo'),
  $titleWinter = document.querySelector('.text-season'),
  $titleCollection = document.querySelector('.text-color'),
  $text = document.querySelector('p'),
  tl = gsap.timeline();

tl.from($wrapper, {scale: 0,  duration: 1.5})
.from($logo,{opacity: 0, y: -50, duration: 0.6})
.from($titleWinter,{opacity: 0, x: -50, duration: 0.6})
.from($titleCollection,{opacity: 0, x: 100, duration: 0.6},"-=0.3")
.from($text,{opacity: 0, y: -1100, duration: 0.6},"-=1.8")