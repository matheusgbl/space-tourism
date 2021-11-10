import styled from 'styled-components';

export const Container = styled.section``;

export const CrewImage = styled.aside`
  position: absolute;
  left: 60%;
  top: 40%;
  height: 100%;

  @media (max-width: 768px) {
    max-height: 600px;
    top: 58%;
    left: 20%;

    img {
      width: 450px;
    }
  }

  @media (max-width: 768px) and (min-width: 375px) {
    position: relative;
    max-height: 300px;
    top: 0;
    left: 0;

    .crew_img_mobile1 {
      width: 250px;
      max-height: 380px;
      margin: 20px auto;
      display: flex;
      border-bottom: 2px solid #383b4b;
    }

    .crew_img1 {
      display: none;
    }
  }
`;

export const CrewInfos = styled.div`
  margin-top: 8rem;

  h2,
  h1 {
    font-family: 'Bellefair';
    text-transform: uppercase;
    font-weight: 400;
  }

  h2 {
    font-size: 32px;
    opacity: 0.5;
  }

  h1 {
    font-size: 56px;
    margin: 40px 0;
  }

  p {
    width: 600px;
    color: #d0d6f9;
    line-height: 32px;
    font-family: 'Barlow';
    font-size: 18px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 3rem auto;
    text-align: center;
    justify-content: center;
    width: 100%;

    h2 {
      font-size: 24px;
    }

    h1 {
      font-size: 40px;
      margin: 20px 0;
    }

    p {
      width: 100%;
      line-height: 28px;
      padding: 0px 80px;
      font-size: 16px;
    }
  }

  @media (max-width: 768px) and (min-width: 375px) {
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
    text-align: center;
    justify-content: center;
    width: 100%;
    margin-top: 5rem;

    h2 {
      font-size: 20px;
    }

    h1 {
      font-size: 34px;
      margin: 20px 0;
    }

    p {
      width: 100%;
      line-height: 25px;
      padding: 0px 40px;
      font-size: 14px;
    }
  }
`;

export const CrewSelection = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  max-width: 200px;

  button {
    padding: 8px;
    border-radius: 50%;
    border: none;
    background-color: rgba(255, 255, 255, 0.5);

    &:hover {
      background-color: #ffffff;
    }

    &.selected {
      background-color: #ffffff;
    }
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    max-width: 100%;

    button {
      padding: 7px;
      margin-left: 20px;
    }
  }
`;
