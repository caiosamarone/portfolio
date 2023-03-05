import Navbar from '../Navbar';
import * as S from './Hero.module';
import Lottie from 'react-lottie';
import animationData from '../../assets/animationData.json';

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <S.Section className="section__hero">
      <Navbar />
      <S.Container className="container__hero">
        <S.ContentAside>
          <S.Title>Hi. I'm Caio Mendes</S.Title>
          <S.WhoImIContainer>
            <S.Line src="/img/line.png" alt="line" />
            <S.Subtitle>Who I'm</S.Subtitle>
          </S.WhoImIContainer>

          <S.Paragraph> A brazilian front end developer who enjoy to play around with technology</S.Paragraph>
        </S.ContentAside>
        <S.AnimationAside>
          <Lottie options={defaultOptions} height={600} width={600} />
        </S.AnimationAside>
      </S.Container>
    </S.Section>
  );
};

export default Hero;
