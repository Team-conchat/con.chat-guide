import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Intro from './pages/Intro';
import Guides from './pages/Guides';
import Tutorial from './pages/Tutorial';

import './styles/global.scss';
import './styles/variables.scss';

function App() {
  return (
    <div className="wrap">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/tutorial" element={<Tutorial />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
