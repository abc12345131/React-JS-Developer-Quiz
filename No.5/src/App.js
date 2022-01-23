import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
