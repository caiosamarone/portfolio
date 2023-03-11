import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  width: 100px;
  padding: 10px;
  background-color: rgb(117 12 189);
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  :hover {
    background: rgb(56 18 82);
    transform: scale(1.1);
  }
`;
