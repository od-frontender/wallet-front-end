import Container from '../../components/Container/Container';
import AppBar from '../../components/AppBar';
import Background from '../../components/Background/Background';
import Blur from '../../components/Blur/Blur';
import Main from '../../components/Main';

import s from './DashboardPage.module.scss';

function DashboardPage() {
  return (
    <div className={s.dashboard}>
      <Background>
        <AppBar />
        <Blur>
          <Container>
            <Main />
          </Container>
        </Blur>
      </Background>
    </div>
  );
}

export default DashboardPage;
