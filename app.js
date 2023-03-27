const tl = gsap.timeline();
// console.log(gsap);

function pageAnimBeforeOut(container){
  return tl
  .to(container.querySelector('.main__inner-text'), {
    x: 100,
    opacity: 0,
    duration: .2
  })
}

function pageAnimOut(container){
  return tl.
  from(container.querySelector('.parallelogram'), {
    width: '120vw',
    duration: .7
  }).
  from(container.querySelector('.main__inner-text'), {
    x: -800,
    opacity: 1,
    duration: .3
  })
  .from(container.querySelector('.main__inner-img'), {
    y: 100,
    scale: 5,
    opacity: 1,
    duration: .3
  })
}

function pageAnimIn(container){
  return tl
  .to(container.querySelector('.parallelogram'), {
    // left: 500,
    width: '120vw',
    duration: .7
  })
  .to(container.querySelector('.main__inner-text'), {
    opacity: 1,
    duration: .5
  })
  .to(container.querySelector('.main__inner-img'), {
    y: 100,
    scale: 5,
    opacity: 1,
    duration: .5
  })
  

  // return tl.to(".preloader-round", {duration: 0.7, scale: 2, opacity: 0.5});
}



barba.init({
  transitions: [{
    name: 'default-transition',
    async beforeLeave(data) {
      await pageAnimBeforeOut(data.current.container);
    },
    async leave(data) {
      await pageAnimIn(data.current.container);
      data.current.container.remove();
    },
    async enter(data) {
      await pageAnimOut(data.next.container);
    }
  }]
});

// barba.init({
//   transitions: [{
//     name: 'opacity-transition',
//     leave(data) {
//       return gsap.to(data.current.container, {
//         duration: 0.7, 
//         scale: 2,
//         opacity: 0
//       });
//     },
//     enter(data) {
//       return gsap.from(data.next.container, {
//         duration: 0.7, 
//         scale: 2,
//         opacity: 0
//       });
//     }
//   }]
// });