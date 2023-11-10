import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {ItemListContainer} from './components/ItemListContainer'
import { NavBar } from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer gretting="Welcome to StyleShoes"/>} />
        <Route path='/category/:categoryid' element={<ItemListContainer />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
