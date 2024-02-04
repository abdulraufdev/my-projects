const textAnim1 = new SplitType(".text_anim", { types: 'lines,  words'});


let tl = gsap.timeline({
    duration: 0.5,
    ease: "circ.inOut"
});
tl.to('.word', {
    y: 0,
    stagger: 0.05,
    delay: 0.5
    
});
  tl.fromTo(".project-sec", {
    opacity: 0,
    y: 100
}, {
    opacity: 1,
    y: 0
})