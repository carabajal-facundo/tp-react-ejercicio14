import Admin from './components/Admin';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Index from './components/Index';
import Detalle from './components/Detalle';
function App() {

  return (
    <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route exact path='/detalle/:nomreceta' element={<Detalle></Detalle>}></Route>
          <Route exact path="/administrador" element={<Admin></Admin>}></Route>
          <Route exact path="/" element={<Index></Index>}></Route>
          <Route path="*" element={<Index></Index>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
