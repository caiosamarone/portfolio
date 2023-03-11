import styled from 'styled-components';

export const Section = styled.div`
  height: calc(100vh - 200px);
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 400;
  margin: 0;
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  text-align: center;
`;
