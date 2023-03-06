import styled from 'styled-components';

export const Section = styled.div`
  height: 100vh;
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
`;

export const ContentAside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  flex: 3;
`;
export const AnimationAside = styled.div`
  flex: 3;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 400;
`;

export const WhoImIContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Subtitle = styled.h2`
  color: #da4ea2;
`;

export const Paragraph = styled.p`
  font-size: 24px;
  color: lightgrey;
`;

export const Line = styled.img`
  height: 5px;
`;
