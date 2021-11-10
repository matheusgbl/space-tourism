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

  .close_icon {
    display: none;
  }

  .hamburger {
    display: none;
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

  @media (max-width: 768px) {
    padding-top: 20px;

    .line {
      display: none;
    }

    img {
      width: 40px;
      height: 40px;
      margin: 0 35px;
    }
  }
  @media (max-width: 768px) and (min-width: 375px) {
    .close_icon {
      display: none;
      z-index: 20;
      width: 20px;
      height: 20px;
      position: absolute;
      right: 0;
    }

    .close_icon_show {
      display: block;
      z-index: 999;
      width: 20px;
      height: 20px;
      position: absolute;
      right: 0;
    }

    .hamburger_show {
      display: none;
    }

    .hamburger {
      display: block;
      z-index: 999;
      width: 20px;
      height: 20px;
      position: absolute;
      right: 0;
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
        border-bottom: none;
        padding: 0px;
      }

      &:hover {
        padding: 0px;
        border-bottom: none;
      }

      strong {
        display: none;
      }
    }
  }

  @media (max-width: 768px) and (min-width: 375px) {
    padding: 150px 100px 0px 20px;
    background-color: rgba(255, 255, 255, 0.1);
    align-items: baseline;
    height: 100%;
    top: 0;
    right: 0;
    position: absolute;
    z-index: 15;
    font-weight: 400;

    a {
      margin-right: 0px;
      font-size: 16px;
      display: flex;
      height: 80px;

      strong {
        display: flex;
        font-size: 16px;
        margin-right: 5px;
      }
    }
  }
`;
