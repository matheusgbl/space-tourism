import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  margin-top: 4rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
    text-align: center;
    flex-direction: column;
  }

  @media (max-width: 768px) and (min-width: 375px) {
    margin-top: 2rem;
    text-align: center;
    flex-direction: column;
  }
`;

export const LaunchSelection = styled.div`
  button {
    border: 1px solid #ffffff;
    color: #ffffff;
    font-family: 'Bellefair';
    font-size: 32px;
    border-radius: 50%;
    padding: 30px 45px;
    display: flex;
    background: none;
    margin-top: 40px;
    transition: all 0.7s ease;

    &:hover {
      background: #ffffff;
      color: #0b0d17;
    }

    &.selected {
      background: #ffffff;
      color: #0b0d17;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    height: 80px;
    justify-content: center;
    margin-top: 20px;

    button {
      font-size: 28px;
      padding: 20px 30px;
      display: block;
      margin-top: 0px;
      margin-left: 30px;
      justify-content: center;
      align-items: center;
      flex-direction: row;
    }
  }

  @media (max-width: 768px) and (min-width: 375px) {
    display: flex;
    width: 100%;
    height: 80px;
    justify-content: center;
    margin-top: 20px;

    button {
      font-size: 24px;
      padding: 20px 30px;
      display: block;
      margin-top: 0px;
      margin-left: 20px;
      justify-content: center;
      align-items: center;
      flex-direction: row;
    }
  }
`;

export const LaunchDescription = styled.div`
  margin: 40px 100px;

  h2 {
    font-family: 'Barlow';
    font-size: 18px;
    font-weight: 400;
    color: #d0d6f9;
  }

  h1 {
    font-size: 56px;
    font-weight: 400;
    font-family: 'Bellefair';
    text-transform: uppercase;
    margin: 40px 0;
  }

  p {
    color: #d0d6f9;
    font-family: 'Barlow';
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    max-width: 480px;
  }

  @media (max-width: 768px) {
    margin: 30px 0px;

    h2 {
      font-size: 16px;
    }

    h1 {
      font-size: 40px;
      margin: 20px 0;
    }

    p {
      max-width: 450px;
      margin: 0 auto;
      font-size: 16px;
      line-height: 28px;
    }
  }

  @media (max-width: 768px) and (min-width: 375px) {
    margin: 20px 0px;

    h2 {
      font-size: 16px;
    }

    h1 {
      font-size: 36px;
      margin: 20px 0;
    }

    p {
      max-width: 100%;
      margin: 0 auto;
      font-size: 14px;
      line-height: 25px;
      padding: 0 20px;
    }
  }
`;

export const LaunchImage = styled.div`
  img {
    display: flex;
    margin-left: 400px;
  }

  .launch_img_landscape {
    display: none;
  }

  @media (max-width: 768px) {
    .launch_img_portrait {
      display: none;
    }

    .launch_img_landscape {
      display: flex;
      max-height: 300px;
    }

    img {
      margin: 0;
      justify-content: center;
      width: 780px;
    }
  }

  @media (max-width: 768px) and (min-width: 375px) {
    .launch_img_portrait {
      display: none;
    }

    .launch_img_landscape {
      display: flex;
      max-height: 300px;
    }

    img {
      margin: 20px auto;
      display: flex;
      width: 100%;
    }
  }
`;
