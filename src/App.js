import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Principal from './pages/principal/Principal';
import Main from './pages/main/Main';
import ItemsPage from './pages/itemsPage/ItemsPage';
import Seccion1 from './componentes/Seccion1';  // Importar Seccion1

function App() {
  return (
    <BrowserRouter>
      <div className='main-screen'>
        <Routes>
          <Route path='/' element={<Principal />} />
          <Route path='main' element={<Main />} />
          <Route path='/items' element={<ItemsPage />} />
          <Route path='/componentes/seccion1' element={<Seccion1 />} /> {/* Ruta para Seccion1 */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
