
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Loyaut from './components/Loyaut/Loyaut';
import CrewPage from './pages/CrewPage/CrewPage';
import DestinationPage from './pages/Destination/DestinationPage';
import HomePage from './pages/HamePage/HomePage';
import TechnologyPage from './pages/TechnologyPage/TechnologyPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Loyaut />}>
          <Route index element={<HomePage />} />
          <Route path='destination' element={<DestinationPage />} />
          <Route path='crew' element={<CrewPage />} />
          <Route path='technology' element={<TechnologyPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
