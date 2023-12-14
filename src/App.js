import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {ItemListContainer} from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from './components/NavBar';
import { Cart } from './components/Cart';
import { CartProvider } from './context/CartContext';
import { Footer } from './components/Footer';

import './styles/App.css'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer banner="banner" gretting="
The best catalog in the world"/>} />
          <Route path='/category/:categoryid' element={<ItemListContainer />}/>
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
