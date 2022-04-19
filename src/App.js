
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Loyaut from './components/Loyaut/Loyaut';
import CrewPage from './pages/CrewPage/CrewPage';
import DestinationPage from './pages/Destination/DestinationPage';
import HomePage from './pages/HamePage/HomePage';
import TechnologyPage from './pages/TechnologyPage/TechnologyPage';
import { useEffect, useState } from 'react';
import data from './config';
function App() {
  
  const [state,setState] = useState('')
  useEffect(() => {
    setState(data)
  },[])
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Loyaut />}>
          <Route index element={<HomePage />} />
          <Route path='destination' element={<DestinationPage state={state.destinations}  />} />
          <Route path='crew' element={<CrewPage  />} />
          <Route path='technology' element={<TechnologyPage  />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
