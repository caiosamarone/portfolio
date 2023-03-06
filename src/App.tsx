import { Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Contact, Hero, Projects, Skills, Who } from './components';

import * as S from './styles';

function App() {
  return (
    <BrowserRouter>
      <S.Container>
        <Hero />
        <Who />
        <Skills />
        <Projects />
        <Contact />
      </S.Container>
    </BrowserRouter>
  );
}

export default App;
