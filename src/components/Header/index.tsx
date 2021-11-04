import logo from '../../assets/shared/logo.svg';
import { Container, Content, Navigation } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="logo" />
        <div className="line"></div>
        <Navigation>
          <a href="/" className="active">
            <strong>00</strong> HOME
          </a>
          <a href="/destination">
            <strong>01</strong> DESTINATION
          </a>
          <a href="/crew">
            <strong>02</strong> CREW
          </a>
          <a href="/tech">
            <strong>03</strong> TECHNOLOGY
          </a>
        </Navigation>
      </Content>
    </Container>
  );
}
