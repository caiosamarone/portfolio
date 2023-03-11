import { Hero, Who } from '../../components';
import * as S from './Home.module';

const Home = () => {
  return (
    <S.Container>
      <Hero />
      <Who />
    </S.Container>
  );
};

export default Home;
