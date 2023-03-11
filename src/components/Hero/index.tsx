import * as S from './Hero.module';
import Lottie from 'react-lottie';
import animationData from '../../assets/animationData.json';

import Typewriter from 'typewriter-effect';
import FadeIn from 'react-fade-in';
import useMobile from '../../hooks/useMobile';

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const { isMobile } = useMobile();
  const mobilePixels = isMobile ? 300 : 600;
  return (
    <S.Section className="section__hero">
      <S.Container className="container__hero">
        <S.ContentAside className="content__aside">
          <FadeIn transitionDuration={1000} delay={200}>
            <S.Title>Hi. I'm Caio Mendes</S.Title>

            <S.WhoImIContainer>
              <S.Line src="/img/line.png" alt="line" />
              <S.Subtitle>Who I'm</S.Subtitle>
            </S.WhoImIContainer>

            <Typewriter
              options={{
                strings: [
                  '<> Front-end Developer </>',
                  'Brazilian, 25 years old',
                  'Who enjoys to play around with technology =)',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
            <S.Paragraph>
              This is my personal website that I created to show my work to people around the world.
            </S.Paragraph>
            <S.SubParagraph>Scroll down to know more about me =)</S.SubParagraph>
          </FadeIn>
        </S.ContentAside>
        <S.AnimationAside className="animation__aside">
          <Lottie options={defaultOptions} height={mobilePixels} width={mobilePixels} />
        </S.AnimationAside>
      </S.Container>
    </S.Section>
  );
};

export default Hero;
