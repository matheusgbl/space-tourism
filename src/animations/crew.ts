import gsap from 'gsap';

export default function crewIntro() {
  gsap
    .timeline()
    .from('.crew_img', {
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: 'ease-in',
    })
    .from('.crew_text h2', {
      x: -100,
      opacity: 0,
      duration: 0.5,
      ease: 'ease-in',
    })
    .from('.crew_text h1', {
      x: -100,
      opacity: 0,
      duration: 0.5,
      ease: 'back',
    })
    .from('.crew_text p', {
      y: -100,
      opacity: 0,
      duration: 0.5,
      ease: 'ease-in',
    })
    .from('.crew_container button', {
      y: -100,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: 'ease-in',
    });
}

export function crewSelect() {
  gsap
    .timeline()
    .from('.crew_img', {
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: 'ease-in',
    })
    .from('.crew_text h2', {
      x: -100,
      opacity: 0,
      duration: 0.5,
      ease: 'ease-in',
    })
    .from('.crew_text h1', {
      x: -100,
      opacity: 0,
      duration: 0.5,
      ease: 'back',
    })
    .from('.crew_text p', {
      y: -100,
      opacity: 0,
      duration: 0.5,
      ease: 'ease-in',
    });
}
