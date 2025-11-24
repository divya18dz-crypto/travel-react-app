import Home from './travelhome';
import Navbar from './Navv';
import Login from './Login';
import Thai from './Thailand';
import Hoo from './home';
import Singa from './Singapore';
import After from './Afterlog';
import Malay from './Malaysia';
import Korea from './SouthKorea';
import Japan from './Japan';
import {Route,Routes} from 'react-router-dom';
import './App.css';
import Paris from './Paris';

function App() {
  return (
    <div className='hh'>
      <Navbar />
    <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Homee' element={<Hoo/>}/>
      <Route path='/Paris' element={<Paris/>}/>
      <Route path='/Japan' element={<Japan/>}/>
      <Route path='/SouthKorea' element={<Korea/>}/>
      <Route path='/Malaysia' element={<Malay/>}/>
      <Route path='/Login' element={<Login/>} />
      <Route path='/Thailand' element={<Thai/>}/>
      <Route path='/Singapore' element={<Singa/>}/>
      <Route path='/Main' element={<After/>}/>
    </Routes>
    </div>
  );
}

export default App;
