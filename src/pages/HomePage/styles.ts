import styled from 'styled-components';

export const Container = styled.main`
  background-image: url('./src/assets/home/background-home-desktop.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    background-image: url('./src/assets/home/background-home-tablet.jpg');
    height: 100vh;
  }

  @media (max-width: 768px) and (min-width: 375px) {
    background-image: url('./src/assets/home/background-home-mobile.jpg');
    height: 100vh;
  }
`;

export const Content = styled.section``;
