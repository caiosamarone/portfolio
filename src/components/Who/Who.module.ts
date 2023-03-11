import styled from 'styled-components';

export const Section = styled.div`
  height: calc(100vh);
  scroll-snap-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
`;
export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 400;
`;

export const Paragraph = styled.p`
  font-size: 24px !important;
  color: lightgrey;
`;

export const Image = styled.img`
  height: 400px;
  border-radius: 50%;
`;

export const Box = styled.div`
  display: flex;
  gap: 12rem;
  align-items: center;
  margin-top: 3rem;
`;

export const TextWrapper = styled.div``;

export const ButtonWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 2rem;
`;
