import styled from 'styled-components';

export const Container = styled.section`
  img {
    width: 450px;
    margin: 100px 60px;
  }
`;

export const DestinationData = styled.aside`
  position: absolute;
  padding: 30px;
  left: 60%;
  height: 100%;
`;

export const DestinationDetails = styled.div`
  width: 600px;

  .description {
    max-width: 450px;
    color: #d0d6f9;
    font-family: 'Barlow';
    font-weight: 400;
    font-size: 18px;
  }

  .separation-line {
    width: 440px;
    height: 1px;
    background: #d0d6f9;
    margin: 40px 0;
  }

  h1 {
    font-size: 100px;
    font-family: 'Bellefair';
    font-weight: 400;
    text-transform: uppercase;
    margin: 50px 0;
  }
`;

export const DistanceAndTravel = styled.div`
  display: flex;

  .travel {
    margin-left: 100px;
  }

  .distance,
  .travel {
    display: flex;
    flex-direction: column;

    p:first-child {
      color: #d0d6f9;
      font-family: 'Barlow';
      font-size: 16px;
      margin-bottom: 20px;
    }

    p:nth-child(2) {
      color: #ffffff;
      font-family: 'Bellefair';
      font-size: 30px;
    }
  }
`;

export const DestinationList = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 380px;

  button {
    border: none;
    background: none;
    color: #d0d6f9;
    font-family: 'Barlow';
    font-size: 18px;

    &:hover {
      color: #ffffff;
      border-bottom: 3px solid rgba(255, 255, 255, 0.5);
      padding: 10px 0;
    }

    &.selected {
      color: #ffffff;
      border-bottom: 3px solid #ffffff;
      padding: 10px 0;
    }
  }
`;
