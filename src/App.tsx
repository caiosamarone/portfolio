import { Contact, Hero, Projects, Skills, Who } from './components';

import * as S from './styles';

function App() {
  return (
    <S.Container className="app">
      <Hero />
      <Who />
      <Skills />
      <Projects />
      <Contact />
    </S.Container>
  );
}

export default App;
