import styled from 'styled-components';

export const Container = styled.section`
  img {
    width: 450px;
    margin: 100px 60px;
  }

  @media (max-width: 768px) {
    img {
      width: 300px;
      margin: 50px 30px;
      display: flex;
      margin: 30px auto;
    }
  }

  @media (max-width: 768px) and (min-width: 375px) {
    img {
      width: 220px;
      display: flex;
      margin: 40px auto;
    }
  }
`;

export const DestinationData = styled.aside`
  position: absolute;
  padding: 30px;
  left: 60%;
  height: 100%;

  @media (max-width: 768px) {
    padding: 30px;
    left: 20%;
    height: 100%;
    top: 420px;
    z-index: 9999;
  }

  @media (max-width: 768px) and (min-width: 375px) {
    padding: 50px 0;
    left: 0;
    height: 100%;
    top: 300px;
    z-index: 2;
  }
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

  @media (max-width: 768px) {
    width: 400px;

    .description {
      font-size: 16px;
      text-align: center;
      max-width: 450px;
    }

    h1 {
      text-align: center;
      font-size: 80px;
      margin: 20px 0;
    }

    .separation-line {
      width: 420px;
      margin: 20px 0;
    }
  }

  @media (max-width: 768px) and (min-width: 375px) {
    width: 100%;
    padding: 0 20px;

    .description {
      font-size: 16px;
      text-align: center;
      max-width: 100%;
      line-height: 25px;
      font-weight: 300;
    }

    h1 {
      text-align: center;
      font-size: 60px;
      margin: 10px 0;
    }

    .separation-line {
      width: 100%;
    }
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

  @media (max-width: 768px) {
    text-align: center;
    justify-content: center;
    .distance,
    .travel {
      p:first-child {
        font-size: 14px;
      }

      p:nth-child(2) {
        font-size: 28px;
      }
    }
  }

  @media (max-width: 768px) and (min-width: 375px) {
    flex-direction: column;
    justify-items: center;

    .travel {
      margin-left: 0px;
    }

    .distance {
      margin-bottom: 20px;
    }

    .distance,
    .travel {
      p:first-child {
        font-size: 16px;
      }

      p:nth-child(2) {
        font-size: 24px;
      }
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

  @media (max-width: 768px) {
    button {
      font-size: 16px;
    }
  }

  @media (max-width: 768px) and (min-width: 375px) {
    padding: 0px 20px;
  }
`;
