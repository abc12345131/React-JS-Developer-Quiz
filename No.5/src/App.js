import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "antd/dist/antd.css"
import Demo from './pages/demo'

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Demo />}></Route>
        <Route path='*' element={<Demo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
