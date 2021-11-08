import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  margin-top: 4rem;

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

  img {
    display: flex;
    margin-left: 400px;
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
`;
