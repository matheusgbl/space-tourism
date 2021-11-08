import styled from 'styled-components';

export const Container = styled.section`
  padding: 15rem;

  @media (max-width: 768px) {
    padding: 5rem 10rem;
  }
`;

export const Content = styled.div`
  font-family: 'Barlow', sans-serif;

  h1 {
    font-family: 'Bellefair', sans-serif;
    font-size: 150px;
    font-weight: 400;
    letter-spacing: 2.5px;
    margin: 30px 0;
  }

  h2 {
    font-size: 28px;
    color: #d0d6f9;
    font-weight: 400;
    letter-spacing: 4.5px;
  }

  p {
    color: #d0d6f9;
    font-weight: 300;
    font-size: 18px;
    max-width: 450px;
    line-height: 40px;
  }

  @media (max-width: 768px) {
    text-align: center;

    h1 {
      margin: 10px 0;
    }

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
      max-width: 100%;
    }
  }
`;

export const ExploreBtn = styled.div`
  a {
    border: none;
    padding: 120px 75px;
    position: absolute;
    border-radius: 50%;
    font-size: 32px;
    font-family: 'Bellefair', sans-serif;
    top: 500px;
    right: 600px;
    transition: all 0.5s ease;
    background-color: #ffffff;
    text-decoration: none;
    color: #0b0d17;

    &:hover {
      color: #ffffff;
      background-color: #0b0d17;
    }
  }

  @media (max-width: 1800px) {
    a {
      right: 200px;
    }
  }

  @media (max-width: 768px) {
    a {
      right: 265px;
      top: 600px;
      padding: 100px 55px;
      font-size: 28px;
    }
  }
`;
