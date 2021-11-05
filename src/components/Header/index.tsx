import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/shared/logo.svg';
import { Container, Content, Navigation } from './styles';

export default function Header() {
  const location = useLocation();

  return (
    <Container>
      <Content>
        <img src={logo} alt="logo" />
        <div className="line"></div>
        <Navigation>
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
