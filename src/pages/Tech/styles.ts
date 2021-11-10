import styled from 'styled-components';

export const Container = styled.main`
  background-image: url('./src/assets/technology/background-technology-desktop.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;

  @media (max-width: 768px) {
    background-image: url('./src/assets/technology/background-technology-tablet.jpg');
  }

  @media (max-width: 768px) and (min-width: 375px) {
    background-image: url('./src/assets/technology/background-technology-mobile.jpg');
  }
`;

export const Content = styled.div`
  padding-top: 100px;
  padding-left: 220px;

  @media (max-width: 768px) {
    padding: 40px 0px;
  }

  @media (max-width: 768px) and (min-width: 375px) {
    padding: 30px 0px;
  }
`;

export const SpaceLaunch = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Barlow';
  font-size: 30px;

  h2 {
    margin-right: 20px;
    opacity: 0.3;
    font-size: 30px;
  }

  p {
    letter-spacing: 2px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    padding-left: 20px;

    h2 {
      font-size: 20px;
    }
  }

  @media (max-width: 768px) and (min-width: 375px) {
    font-size: 16px;
    padding-left: 10px;
    justify-content: center;

    h2 {
      font-size: 16px;
    }
  }
`;
