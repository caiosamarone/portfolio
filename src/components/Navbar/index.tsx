import * as S from './Navbar.module';
import { GitBranch, Star } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <S.Section className="section__navbar">
      <S.Container>
        <S.Links>
          <S.List>
            <S.ListItems>Home</S.ListItems>
            {/* <S.ListItems>Who</S.ListItems> */}
            <S.ListItems>Skills</S.ListItems>
            <S.ListItems>Projects</S.ListItems>
            <S.ListItems>Contact</S.ListItems>
          </S.List>
        </S.Links>
        <NavLink to="https://github.com/caiosamarone/portfolio">
          <S.GitButton>
            <GitBranch size={18} weight="fill" />
            <Star size={18} weight="fill" />
          </S.GitButton>
        </NavLink>
      </S.Container>
    </S.Section>
  );
};

export default Navbar;
