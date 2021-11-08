import gsap from 'gsap';

export default function techIntro() {
  gsap
    .timeline()
    .from('.launch_img', {
      x: 200,
      opacity: 0,
      duration: 0.4,
      ease: 'ease-in',
    })
    .from('.launch_selection button', {
      y: 300,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: 'ease-in',
    })
    .from('.launch_description h2', {
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: 'ease-in',
    })
    .from('.launch_description h1', {
      x: -100,
      opacity: 0,
      duration: 0.5,
      ease: 'ease-in',
    })
    .from('.launch_description p', {
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: 'ease-in',
    });
}

export function techSelect() {
  gsap
    .timeline()
    .from('.launch_img', {
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: 'ease-in',
    })
    .from('.launch_description h2', {
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: 'ease-in',
    })
    .from('.launch_description h1', {
      x: -100,
      opacity: 0,
      duration: 0.5,
      ease: 'ease-in',
    })
    .from('.launch_description p', {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: 'ease-in',
    });
}
