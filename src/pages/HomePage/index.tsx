import { useLayoutEffect } from 'react';

import heroIntro from '../../animations/hero';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import { Container } from './styles';

export default function Home() {
  useLayoutEffect(() => {
    heroIntro();
  }, [heroIntro]);

  return (
    <Container>
      <Header />
      <Hero />
    </Container>
  );
}
