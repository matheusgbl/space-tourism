/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import close from '../../assets/shared/icon-close.svg';
import hamburger from '../../assets/shared/icon-hamburger.svg';
import logo from '../../assets/shared/logo.svg';
import { Container, Content, Navigation } from './styles';

export default function Header() {
  const location = useLocation();
  const [opened, setOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.screen.width <= 768) {
      setIsMobile(true);
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={logo} alt="logo" />
        <img
          src={hamburger}
          alt="hamburger"
          className={!opened ? 'hamburger' : 'hamburger_show'}
          onClick={() => setOpened(true)}
        />
        <img
          src={close}
          alt="close"
          className={!opened ? 'close_icon' : 'close_icon_show'}
          onClick={() => setOpened(false)}
        />
        <div className="line"></div>
        <Navigation
          style={{
            display: !isMobile && opened ? 'block' : 'none',
          }}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            <strong>00</strong> HOME
          </Link>
          <Link
            to="/destination"
            className={location.pathname.includes('destination') ? 'active' : ''}>
            <strong>01</strong> DESTINATION
          </Link>
          <Link to="/crew" className={location.pathname.includes('crew') ? 'active' : ''}>
            <strong>02</strong> CREW
          </Link>
          <Link to="/tech" className={location.pathname.includes('tech') ? 'active' : ''}>
            <strong>03</strong> TECHNOLOGY
          </Link>
        </Navigation>
      </Content>
    </Container>
  );
}
