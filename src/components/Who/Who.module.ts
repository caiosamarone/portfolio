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
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  font-size: 24px !important;
  color: lightgrey;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

export const Image = styled.img`
  height: 400px;
  border-radius: 50%;
  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 12rem;
  scroll-snap-align: center;
  align-items: center;
  margin-top: 3rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 0px;
    padding: 0 1rem;
    gap: 1rem;
  }
`;

export const TextWrapper = styled.div``;

export const ButtonWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 2rem;
`;
