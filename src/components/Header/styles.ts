import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
`;

export const Content = styled.section`
  display: flex;
  padding-top: 60px;
  align-items: center;
  justify-content: space-between;

  .line {
    width: 42vw;
    height: 0.01rem;
    background: #fff;
    opacity: 0.5;
    position: absolute;
    left: 220px;
    z-index: 9999;
  }

  img {
    width: 50px;
    height: 50px;
    margin: 0 75px;
  }

  @media (max-width: 1800px) {
    .line {
      width: 26.5vw;
    }
  }

  @media (max-width: 768px) {
    padding-top: 0;

    .line {
      display: none;
    }
  }
`;

export const Navigation = styled.nav`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 50px 100px;
  backdrop-filter: blur(18px);

  a {
    text-decoration: none;
    color: #ffffff;
    margin-right: 4rem;
    font-family: 'Barlow', sans-serif;
    letter-spacing: 1.5px;
    height: 100%;

    &.active {
      border-bottom: 3px solid #ffffff;
      padding: 49px 0;
    }

    &:hover {
      border-bottom: 3px solid rgba(255, 255, 255, 0.5);
      padding: 49px 0;
    }

    strong {
      margin-right: 10px;
    }
  }

  @media (max-width: 1800px) {
    padding: 50px 40px;
  }

  @media (max-width: 768px) {
    padding: 40px 60px;

    a {
      margin-right: 1rem;
      font-size: 14px;

      &.active {
        padding: 39px 0;
      }

      &:hover {
        padding: 39px 0;
      }

      strong {
        display: none;
      }
    }
  }
`;
