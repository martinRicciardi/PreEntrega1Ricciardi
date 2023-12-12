import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {ItemListContainer} from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from './components/NavBar';
import { Cart } from './components/Cart';
import { CartProvider } from './context/CartContext';

import './styles/App.css'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer banner="banner" gretting="Welcome to StyleShoes"/>} />
          <Route path='/category/:categoryid' element={<ItemListContainer />}/>
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
