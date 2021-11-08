import styled from 'styled-components';

export const Container = styled.main`
  background-image: url('./src/assets/technology/background-technology-desktop.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const Content = styled.div`
  padding-top: 100px;
  padding-left: 220px;
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
`;
