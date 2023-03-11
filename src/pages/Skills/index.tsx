import * as S from './HardSkills/HardSkills.module';

import 'react-tooltip/dist/react-tooltip.css';

import HardSkills from './HardSkills';
import FadeIn from 'react-fade-in';
const Skills = () => {
  return (
    <S.Container>
      <S.Section className="section__Skills">
        <S.Content className="sklls__wrapper">
          <FadeIn transitionDuration={1000} delay={200}>
            <S.Title>
              My Professional <span style={{ color: 'rgb(117 12 189)' }}>Skills</span>
            </S.Title>
            <HardSkills />
          </FadeIn>
        </S.Content>
      </S.Section>
    </S.Container>
  );
};
export default Skills;
