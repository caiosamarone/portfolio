import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import { Home, Contact, Skills, Projects } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
