const textAnim1 = new SplitType(".text_anim", { types: 'lines words'});


gsap.to('.line > *',{
    // yes, we can add it to an entire timeline!
    y: 0 ,
    stagger: 0.001,
    delay: 0.5,
    duration: 0.5,
    ease: "expo.out"
  });