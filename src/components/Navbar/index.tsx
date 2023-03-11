import * as S from './Navbar.module';
import { AddressBook, GitBranch, HouseLine, Lightning, ProjectorScreenChart, Star } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import useMobile from '../../hooks/useMobile';

const Navbar = () => {
  const { isMobile } = useMobile();
  return (
    <S.Section className="section__navbar">
      <S.Container>
        <S.Links>
          <S.List>
            <NavLink to="/">
              <S.ListItems>
                <HouseLine size={24} />
                {!isMobile && 'Home'}
              </S.ListItems>
            </NavLink>
            <NavLink to="/skills">
              <S.ListItems>
                <Lightning size={24} />
                {!isMobile && 'Skills'}
              </S.ListItems>
            </NavLink>
            <NavLink to="/projects">
              <S.ListItems>
                <ProjectorScreenChart size={24} />
                {!isMobile && 'Projects'}
              </S.ListItems>
            </NavLink>

            <NavLink to="/contact">
              <S.ListItems>
                <AddressBook size={24} />
                {!isMobile && 'Contact'}
              </S.ListItems>
            </NavLink>
          </S.List>
        </S.Links>
        <S.Box>
          <S.Profile src="./img/profile-avatar-IA-1.jpeg" />
          {!isMobile && (
            <NavLink to="https://github.com/caiosamarone/portfolio" target="_blank">
              <S.GitButton>
                <GitBranch size={18} weight="fill" />
                <Star size={18} weight="fill" />
              </S.GitButton>
            </NavLink>
          )}
        </S.Box>
      </S.Container>
    </S.Section>
  );
};

export default Navbar;
