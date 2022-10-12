
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import BannerOne from './components/Banner/BannerOne';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FooterBar from './components/FooterBar/FooterBar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <BannerOne />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/product/:itemID' element={<ItemDetailContainer />} />
          <Route path='/category/:categoryID' element={<ItemListContainer />} />
        </Routes>

        <footer class="py-5 bg-black">
          <FooterBar />
        </footer>
      </BrowserRouter>
    </div>

  );
}

export default App;
