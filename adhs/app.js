gsap.registerPlugin(ScrollTrigger);

// Explosion Start
gsap.to("#explosion1", { opacity: 0, duration: 1, y: -100, x: -50 })
gsap.to("#explosion2", { opacity: 0, duration: 1, y: 50, x: -50 })
gsap.to("#explosion3", { opacity: 0, duration: 1, y: -100, x: 50 })
gsap.to("#explosion4", { opacity: 0, duration: 1, y: 50, x: 100 })


// Störung
gsap.to('.adhs-stoerung', {
  scrollTrigger: {
  trigger: ".adhs-stoerung",
  start: "top center",
  toggleActions: "restart pause reverse none"},
  x: 40,
  duration: 1,
  opacity: 1,
});

// stuhl
let stuhltimeline = gsap.timeline({
  scrollTrigger: {
  trigger: "#adhs-stuhl",
  start: "top center",
  toggleActions: "restart pause reverse none"},
});

stuhltimeline.to("#adhs-stuhl", { duration: 0.75, rotation: 15});
stuhltimeline.to("#adhs-stuhl", { duration: 0.75, rotation: 25, x: 10});
stuhltimeline.to("#adhs-stuhl", { duration: 0.75, rotation: 15, x: -10});
stuhltimeline.to("#adhs-stuhl", { duration: 0.75, rotation: 25, x: 10});
stuhltimeline.to("#adhs-stuhl", { duration: 0.75, rotation: 15, x: -10});
stuhltimeline.to("#adhs-stuhl", { duration: 0.75, rotation: 25, x: 10});


// Explosion klein
gsap.to('#explosion-klein', {
  scrollTrigger: {
  trigger: "#explosion-klein",
  start: "top center",
  toggleActions: "restart pause reverse none"},
  scale: 2,
  duration: 2.5,
});


// Kontrolle
gsap.to('#adhs-kontrolle', {
  scrollTrigger: {
  trigger: ".adhs-kontrolle",
  start: "top center",
  toggleActions: "restart pause reverse none"},
  x: 40,
  duration: 1,
  opacity: 1,
});


// Pillen
let tl = gsap.timeline({
  scrollTrigger: {
  trigger: ".adhs-text10",
  start: "top center",
  toggleActions: "restart pause reverse none"},
});

tl.to("#tablette1", { duration: 1.2, opacity: 1, rotation: 180, y: 750});
tl.to("#tablette2", { duration: 1.2, opacity: 1, rotation: -180, y: 675});
tl.to("#tablette3", { duration: 1.2, opacity: 1, rotation: 180, y: 600});
