import Admin from './components/Admin';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {

  return (
    <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<Admin></Admin>}></Route>
          <Route path="*" element={<Admin></Admin>}></Route>
        </Routes>
    </BrowserRouter>

    // <NavBar></NavBar>
    // <Admin></Admin>
  )
}

export default App
