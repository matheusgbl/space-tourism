import homeBg from '../../assets/home/background-home-desktop.jpg';
import { Container, Content } from './styles';

function Home() {
  return (
    <Container>
      <img src={homeBg} alt="background space" />
      <Content>dapadale</Content>
    </Container>
  );
}

export default Home;
