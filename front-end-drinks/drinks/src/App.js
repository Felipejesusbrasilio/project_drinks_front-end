import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home/Home.js';
import Admin from './admin/admin.js';
import Cadastro_user from './cadastrar/cadastrar';
import {Provider} from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cadastrar" element={<Cadastro_user />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
