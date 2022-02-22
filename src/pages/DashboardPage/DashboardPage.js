import AppBar from '../../components/AppBar';
import Background from '../../components/Background/Background';
import Blur from '../../components/Blur/Blur';
import Main from '../../components/Main';

function DashboardPage() {
  return (
    <Background>
      <AppBar />
      <Blur>
        <Main />
      </Blur>
    </Background>
  );
}

export default DashboardPage;
