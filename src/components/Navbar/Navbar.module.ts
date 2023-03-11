import styled from 'styled-components';
import Button from '../Button';

export const Section = styled.div`
  display: flex;
  justify-content: center;
  /* background: url(./img/bg.jpeg); */
`;

export const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  color: white;
`;

export const Links = styled.div``;

export const Icons = styled.div``;

export const List = styled.ul`
  padding: 0;
  font-family: 'Poppins', sans-serif;
  list-style: none;
  display: flex;
  gap: 2rem;
`;

export const ListItems = styled.li`
  padding: 0.5rem;
  font-size: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-weight: 0 !important;

  cursor: pointer;
  &:hover::after {
    width: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    background-color: rgb(117 12 189);
    height: 3px;
    width: 0;
    left: 0;
    bottom: -5px;
    transition: all 0.3s ease;
  }
`;

export const GitButton = styled.button`
  display: flex;
  justify-content: space-evenly;
  border: none;
  width: 100px;
  padding: 10px;
  background-color: rgb(117 12 189);
  color: white;
  border-radius: 5px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  :hover {
    background: rgb(56 18 82);
    transform: scale(1.1);
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Profile = styled.img`
  height: 36px;
  border-radius: 50%;
`;
