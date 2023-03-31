const tl = gsap.timeline();
// console.log(gsap);

document.querySelectorAll('.menu-item__link')
  .forEach(el => el.addEventListener('click'), e => {
    e.preventDefault();
  })

function pageAnimBeforeOut(container){
  return tl
  .to(container.querySelector('.main__inner-text'), {
    x: 100,
    opacity: 0,
    duration: .2
  })
}

// function pageAnimOut(container){
//   return tl.
//   from(container.querySelector('.parallelogram'), {
//     width: '120vw',
//     duration: .7
//   }).
//   from(container.querySelector('.main__inner-text'), {
//     x: -800,
//     opacity: 1,
//     duration: .3
//   })
//   .from(container.querySelector('.main__inner-img'), {
//     y: 100,
//     scale: 5,
//     opacity: 1,
//     duration: .3
//   })
// }

// function pageAnimIn(container){
//   return tl
//   .to(container.querySelector('.parallelogram'), {
//     // left: 500,
//     width: '120vw',
//     duration: .7

//   })
//   .to(container.querySelector('.main__inner-text'), {
//     opacity: 1,
//     duration: .5
//   })
//   .to(container.querySelector('.main__inner-img'), {
//     y: 100,
//     scale: 5,
//     opacity: 1,
//     duration: .5
//   })
// }

function pageAnimIn2(container){
  return tl
    .to(container.querySelector('.parallelogram-wrapper'), {
      duration: .7,
      scaleX: 1,
      transformOrigin: 'top left',
    })
    .to(container.querySelector('.main-inner__text'), {
      opacity: 1,
      duration: .5
    })
    .to(container.querySelector('.main-inner__img'), {
      y: 100,
      scale: 5,
      opacity: 1,
      duration: .2
    })
}

function pageAnimOut2(container){
  return tl
    .from(container.querySelector('.parallelogram-wrapper'), {
      duration: .7,
      scaleX: 1,
      transformOrigin: 'top right',
    })
    .from(container.querySelector('.main__inner-text'), {
      x: -800,
      duration: .5,
      opacity: 1,
    }, '<')
    .from(container.querySelector('.main__inner-img'), {
      duration: .2,
      y: 100,
      scale: 5,
      opacity: 1,
    })
}



barba.init({
  preventRunning: true,
  transitions: [{
    name: 'default-transition',
    async beforeLeave(data) {
      await pageAnimBeforeOut(data.current.container);
    },
    async leave(data) {
      await pageAnimIn2(data.current.container);
      data.current.container.remove();
    },
    async enter(data) {
      await pageAnimOut2(data.next.container);
    }
  }]
});

