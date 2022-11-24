
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import BannerOne from './components/Banner/BannerOne';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FooterBar from './components/FooterBar/FooterBar';
import { CartContextProvider } from './context/cartContext';
import CartView from './components/CartView/CartView';
import FormContact from './components/FormContact/FormContact';


function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
      <div className="slide-item"> ENVIOS GRATIS A TODO EL PAIS COMPRAS A PARTIR $10.000</div>
        <header>
          <NavBar />
        </header>
        <BannerOne />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/contact' element={< FormContact />}/>   
          <Route path='/product/:itemID' element={<ItemDetailContainer />} />
          <Route path='/category/:categoryID' element={<ItemListContainer />} />
          <Route path='/cart' element={<CartView/>}/>
          <Route path="*" element={<h3>El producto o contenido no existe o ha sido eliminado</h3>} />
        </Routes>

        <footer className="py-5 bg-black">
          <FooterBar />
        </footer>
      </BrowserRouter>
      </CartContextProvider>
    </div>

  );
}

export default App;
