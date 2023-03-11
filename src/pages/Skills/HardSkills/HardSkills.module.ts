import styled from 'styled-components';
import 'react-tooltip/dist/react-tooltip.css';

export const Section = styled.div`
  height: calc(100vh - 200px);
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  align-items: center;
`;

export const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  max-width: 1400px;
  margin: 0 auto;
  color: white;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
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

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
`;

export const Card = styled.div`
  width: 180px;
  font-size: 4.5em !important;
  margin: 15px !important;
  padding: 10px !important;
  opacity: 0.93 !important;
  border: 1.7px solid rgba(200, 137, 230, 0.637) !important;
  vertical-align: middle !important;
  text-align: center !important;
  border-radius: 5px !important;
  display: table !important;
  box-shadow: 4px 5px 4px 3px rgba(89, 4, 168, 0.137) !important;
  overflow: hidden !important;
  transition: all 0.4s ease 0s !important;
  :hover {
    transform: scale(1.05) !important;
    overflow: hidden !important;
  }
`;
