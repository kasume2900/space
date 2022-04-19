
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Loyaut from './components/Loyaut/Loyaut';
import CrewPage from './pages/CrewPage/CrewPage';
import DestinationPage from './pages/Destination/DestinationPage';
import HomePage from './pages/HamePage/HomePage';
import TechnologyPage from './pages/TechnologyPage/TechnologyPage';
import dataJS from './data.json'
import { useEffect, useState } from 'react';
function App() {
  
  const [data,setData] = useState('')

  useEffect(() => {
    const res = JSON.stringify(dataJS)
    const dataJson = JSON.parse(res)
    setData(dataJson)
  },[])
  return (
    <>
      <Routes>
        <Route path='/' element={<Loyaut />}>
          <Route index element={<HomePage />} />
          <Route path='destination' element={<DestinationPage data={data.destinations} />} />
          <Route path='crew' element={<CrewPage data={data.crew} />} />
          <Route path='technology' element={<TechnologyPage data={data.technology} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
