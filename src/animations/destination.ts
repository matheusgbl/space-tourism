import gsap from 'gsap';

export default function destinationIntro() {
  gsap
    .timeline()
    .from('.destination_planet', {
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: 'ease-in',
    })
    .from('.destination_list', {
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: 'back',
    })
    .from('.destination_text h1', {
      x: -100,
      opacity: 0,
      duration: 0.5,
      ease: 'ease-in',
    })
    .from('.description', {
      x: -100,
      opacity: 0,
      duration: 0.5,
      ease: 'ease-in',
    })
    .from('.destination_data', {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: 'ease-in',
    });
}

export function destinationSelect() {
  gsap
    .timeline()
    .from('.destination_planet', {
      y: 100,
      opacity: 0,
      duration: 0.4,
      ease: 'ease-in',
    })
    .from('.destination_text h1', {
      x: -100,
      opacity: 0,
      duration: 0.3,
      ease: 'ease-in',
    })
    .from('.description', {
      x: -100,
      opacity: 0,
      duration: 0.3,
      ease: 'ease-in',
    })
    .from('.destination_data', {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 0.3,
      ease: 'ease-in',
    });
}
