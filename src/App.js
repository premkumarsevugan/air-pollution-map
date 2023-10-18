import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Basic from './components/Basic';
import MarkerCom from './components/MarkerCom';
import MapProj from './components/MapProj';
import Home from './components/Home';
import Navigation from './components/Navigation1';
import History from './components/History';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <div className="App flex w-full">
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/marker' element={<MarkerCom />} />
        <Route path='/navigation' element={<Navigation />} />
        <Route path='/history' element={<History />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/basic' element={<Basic  />}></Route>
        <Route path='/mapProject' element = {<MapProj />}></Route>
        </Routes>
      
    </div>
  );
}

export default App;
