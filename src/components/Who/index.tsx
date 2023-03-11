import Button from '../Button';
import * as S from './Who.module';

const Who = () => {
  return (
    <S.Section className="section__who">
      <S.Container className="container__who">
        <S.Title>More about me</S.Title>

        <S.Box>
          <S.TextWrapper>
            <S.Paragraph>
              Hello, my name is Caio Mendes and I am a Developer with 3 years of experience. My emphasis is on{' '}
              <strong>web </strong>
              development, creating responsive and user-friendly interfaces that enhance the user experience. <br />
              <br />
              Front-end is my main area, but I also have back-end knowledge, and interest in agile software management.
              Whenever possible, I also apply my passion for developing products with Modern Javascript Library and
              Frameworks like React.js and Next.js.
              <br />
              <br />
              Know my skills, see my projects or contact me:
            </S.Paragraph>
            <S.ButtonWrapper>
              <Button> Skills</Button>
              <Button>Projects</Button>
              <Button>Contact</Button>
            </S.ButtonWrapper>
          </S.TextWrapper>

          <S.Image src="/img/profile-avatar-IA-1.jpeg" alt="" />
        </S.Box>
      </S.Container>
    </S.Section>
  );
};

export default Who;
