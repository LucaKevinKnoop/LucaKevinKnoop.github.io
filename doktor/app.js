gsap.registerPlugin(ScrollTrigger);

gsap.to('#kreuz', {
  scrollTrigger: {
  trigger: ".doktor-bold3",
  start: "top center",
  toggleActions: "restart pause reverse none"},
  y: 530,
  duration: 3,
  opacity: 1,
});

gsap.to('#kleeblatt1', {
  scrollTrigger: {
  trigger: ".doktor-text4",
  start: "top center",
  toggleActions: "restart pause reverse none"},
  y: 300,
  duration: 3,
  opacity: 1,
  rotate: 30,
});

gsap.to('#kleeblatt2', {
  scrollTrigger: {
  trigger: ".doktor-text4",
  start: "top center",
  toggleActions: "restart pause reverse none"},
  y: 100,
  duration: 3,
  opacity: 1,
  rotate: 45,
});

gsap.to('#kleeblatt3', {
  scrollTrigger: {
  trigger: ".doktor-text4",
  start: "top center",
  toggleActions: "restart pause reverse none"},
  y: 75,
  duration: 3,
  opacity: 1,
  rotate: -15,
});

gsap.to('#kleeblatt4', {
  scrollTrigger: {
  trigger: ".doktor-text4",
  start: "top center",
  toggleActions: "restart pause reverse none"},
  y: 100,
  duration: 3,
  opacity: 1,
  rotate: -60,
});

gsap.to('#kleeblatt5', {
  scrollTrigger: {
  trigger: ".doktor-text4",
  start: "top center",
  toggleActions: "restart pause reverse none"},
  y: 300,
  duration: 3,
  opacity: 1,
  rotate: -30,
});

gsap.to('#megafon', {
  scrollTrigger: {
  trigger: ".doktor-light9",
  start: "top center",
  toggleActions: "restart pause reverse none"},
  scale: 1.5,
  duration: 2,
});


let timeline = gsap.timeline({
  scrollTrigger: {
  trigger: ".doktor-light13",
  start: "top center",
  toggleActions: "restart pause reverse none"},
});

timeline.to("#herz1", { scale: 1.2});
timeline.to("#herz1", { scale: 1.0});
timeline.to("#herz1", { scale: 1.2});
timeline.to("#herz1", { scale: 1.0});
timeline.to("#herz1", { scale: 1.2});
timeline.to("#herz1", { scale: 1.0});

gsap.to('#verdienstkreuz', {
  scrollTrigger: {
  trigger: ".doktor-light14",
  start: "top center",
  toggleActions: "restart pause reverse none"},
  y: 700,
  duration: 6,
});
