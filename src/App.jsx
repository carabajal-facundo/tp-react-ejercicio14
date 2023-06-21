import Admin from './components/Admin';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Detalle from './assets/components/pages/Detalle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Index from './components/Index';
function App() {

  return (
    <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route exact path="/administrador" element={<Admin></Admin>}></Route>
          <Route exact path="/detalle" element={<Detalle></Detalle>}></Route>
          <Route exact path="/" element={<Index></Index>}></Route>
          <Route path="*" element={<Index></Index>}></Route>
        </Routes>
    </BrowserRouter>

    // <NavBar></NavBar>
    // <Admin></Admin>
  )
}

export default App
