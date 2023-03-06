import styled from 'styled-components';
import Button from '../Button';

export const Section = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 1510px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
`;

export const Links = styled.div``;

export const Icons = styled.div``;

export const List = styled.ul`
  font-family: 'Poppins', sans-serif;
  list-style: none;
  display: flex;
  gap: 2rem;
`;

export const ListItems = styled.li`
  padding: 0.5rem;
  position: relative;

  cursor: pointer;
  &:hover::after {
    width: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    background-color: #ff3c78;
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
  background-color: #da4ea2;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;
