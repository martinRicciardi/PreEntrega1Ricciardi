import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {ItemListContainer} from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer gretting="Welcome to StyleShoes"/>} />
        <Route path='/category/:categoryid' element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
