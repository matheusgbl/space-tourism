import styled from 'styled-components';

export const Container = styled.section`
  padding: 15rem;
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

  .explore-button {
    border: none;
    padding: 120px 75px;
    position: absolute;
    border-radius: 50%;
    font-size: 32px;
    font-family: 'Bellefair', sans-serif;
    top: 520px;
    right: 300px;
    transition: all 0.5s ease;

    &:hover {
      color: #ffffff;
      background-color: #0b0d17;
    }
  }
`;
