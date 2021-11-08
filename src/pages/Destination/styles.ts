import styled from 'styled-components';

export const Container = styled.main`
  background-image: url('./src/assets/destination/background-destination-desktop.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;

  @media (max-width: 768px) {
    background-image: url('./src/assets/destination/background-destination-tablet.jpg');
  }
`;

export const Content = styled.div`
  padding: 100px 220px;

  @media (max-width: 768px) {
    padding: 40px 50px;
  }
`;

export const PickDestination = styled.div`
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

    h2 {
      font-size: 20px;
    }
  }
`;

export const DestinationDetails = styled.div``;
