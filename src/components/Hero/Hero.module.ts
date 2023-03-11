import styled from 'styled-components';
import Button from '../Button';

export const Section = styled.div`
  height: calc(100vh - 100px);
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;

export const ContentAside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  flex: 3;
  @media screen and (max-width: 768px) {
    padding: 0 1.5rem;
    justify-content: flex-start;
  }
  .Typewriter__wrapper {
    font-size: 24px !important;
    color: lightgrey;
  }
`;
export const AnimationAside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 3;
  @media screen and (max-width: 768px) {
    flex: 1;
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

export const WhoImIContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Subtitle = styled.h2`
  color: rgb(117 12 189);
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  font-size: 24px !important;
  color: lightgrey;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const SubParagraph = styled.p`
  font-size: 1rem !important;
  color: lightgrey;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Line = styled.img`
  height: 5px;
`;

export const SkillsBtn = styled(Button)`
  margin-top: 1rem;
`;
