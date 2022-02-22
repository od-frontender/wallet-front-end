import Container from '../../components/Container/Container';
import AppBar from '../../components/AppBar';
import Background from '../../components/Background/Background';
import Blur from '../../components/Blur/Blur';
import Main from '../../components/Main';

function DashboardPage() {
  return (
    <Background>
      <AppBar />
      <Blur>
        <Container>
          <Main />
        </Container>
      </Blur>
    </Background>
  );
}

export default DashboardPage;
