import FadeIn from 'react-fade-in';
import { NavLink } from 'react-router-dom';
import SocialMediaIcon from '../../components/SocialMediaIcon';
import * as S from './Contact.module';

const Contact = () => {
  return (
    <S.Container>
      <S.Section className="section__contact">
        <S.Content>
          <FadeIn transitionDuration={1000} delay={200}>
            <S.Title>Find me on</S.Title>
            <S.Subtitle>
              Feel free to <span style={{ color: 'rgb(117 12 189)' }}>connect </span> with me
            </S.Subtitle>
            <S.WrapperLogos>
              <NavLink to="https://www.linkedin.com/in/caio-henrique-samarone-mendes-788b92154/" target="_blank">
                <SocialMediaIcon type="linkedin" />
              </NavLink>
              <NavLink to="https://github.com/caiosamarone" target="_blank">
                <SocialMediaIcon type="github" />
              </NavLink>
              <NavLink to={`https://api.whatsapp.com/send?phone=5515996839391`} target="_blank">
                <SocialMediaIcon type="whatsapp" />
              </NavLink>
              <NavLink to="https://www.linkedin.com/in/caio-henrique-samarone-mendes-788b92154/" target="_blank">
                <SocialMediaIcon type="instagram" />
              </NavLink>
            </S.WrapperLogos>
          </FadeIn>
        </S.Content>
      </S.Section>
    </S.Container>
  );
};
export default Contact;
