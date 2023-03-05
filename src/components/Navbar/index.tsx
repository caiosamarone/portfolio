import Button from '../Button';
import * as S from './Navbar.module';

const Navbar = () => {
  return (
    <S.Section className="section__navbar">
      <S.Container>
        <S.Links>
          <S.List>
            <S.ListItems>Home</S.ListItems>
            <S.ListItems>Who</S.ListItems>
            <S.ListItems>Skills</S.ListItems>
            <S.ListItems>Projects</S.ListItems>
            <S.ListItems>Contact</S.ListItems>
          </S.List>
        </S.Links>
        <Button>Teste</Button>
      </S.Container>
    </S.Section>
  );
};

export default Navbar;
