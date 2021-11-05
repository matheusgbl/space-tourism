import styled from 'styled-components';

export const Container = styled.main`
  background-image: url('./src/assets/destination/background-destination-desktop.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const Content = styled.div`
  padding: 100px 220px;
`;

export const PickDestination = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Barlow';
  font-size: 28px;

  h2 {
    margin-right: 20px;
    opacity: 0.3;
  }

  p {
    letter-spacing: 2px;
  }
`;

export const DestinationDetails = styled.div``;
