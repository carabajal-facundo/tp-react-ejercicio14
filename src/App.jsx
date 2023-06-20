import Admin from './components/Admin';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Detalle from './assets/components/pages/Detalle';

function App() {

  return (
    <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<Admin></Admin>}></Route>
          <Route exact path="/detalle" element={<Detalle></Detalle>}></Route>
          <Route path="*" element={<Admin></Admin>}></Route>
        </Routes>
    </BrowserRouter>

    // <NavBar></NavBar>
    // <Admin></Admin>
  )
}

export default App
