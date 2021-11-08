import gsap from 'gsap';

export default function heroIntro() {
  gsap
    .timeline()
    .from('.hero_text', { opacity: 0, scale: 0, ease: 'power2.inOut' })
    .from('.hero_text h2', {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: 'back',
    })
    .from('.hero_text h1', {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'back',
    })
    .from('.explore-button', {
      y: 0,
      opacity: 0,
      duration: 0.8,
      ease: 'back',
    });
}
