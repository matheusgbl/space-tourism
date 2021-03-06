import styled from 'styled-components';

export const Container = styled.main`
  background-image: url('./src/assets/crew/background-crew-desktop.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;

  @media (max-width: 768px) {
    background-image: url('./src/assets/crew/background-crew-tablet.jpg');
  }

  @media (max-width: 768px) and (min-width: 375px) {
    background-image: url('./src/assets/crew/background-crew-mobile.jpg');
  }
`;

export const Content = styled.div`
  padding: 100px 220px;

  @media (max-width: 768px) {
    padding: 40px 50px;
  }

  @media (max-width: 768px) and (min-width: 375px) {
    padding: 40px 10px;
  }
`;

export const CrewMeeting = styled.section`
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
    letter-spacing: 4px;
  }

  @media (max-width: 768px) {
    font-size: 20px;

    h2 {
      font-size: 20px;
    }
  }

  @media (max-width: 768px) and (min-width: 375px) {
    font-size: 16px;
    justify-content: center;

    h2 {
      font-size: 16px;
    }
  }
`;
