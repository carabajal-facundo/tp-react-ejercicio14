import Admin from './components/Admin';
import Detalle from './components/Detalle'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {

  return (
    <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route exact path="/administrador" element={<Admin></Admin>}></Route>
          <Route exact path="/detalle" element={<Detalle></Detalle>}></Route>
          <Route path="*" element={<Admin></Admin>}></Route>
        </Routes>
    </BrowserRouter>

    // <NavBar></NavBar>
    // <Admin></Admin>
  )
}

export default App
