import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">

        <ItemListContainer greeting="Mensaje Bienvenida" />
        <img src={logo} className="App-logo" alt="logo" />
      </header>


      <footer class="py-5 bg-dark">
        <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Tienda Ejemplo CODER 2022</p></div>
      </footer>
    </div>
  );
}

export default App;
