import styled from 'styled-components';

export const Container = styled.main`
  background-image: url('./src/assets/crew/background-crew-desktop.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const Content = styled.div`
  padding: 100px 220px;
`;

export const CrewMeeting = styled.section`
  display: flex;
  align-items: center;
  font-family: 'Barlow';
  font-size: 30px;

  h2 {
    margin-right: 20px;
    opacity: 0.3;
  }

  p {
    letter-spacing: 4px;
  }
`;
