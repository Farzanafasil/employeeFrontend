import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Employeeform from './components/Employeeform';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/empform'element={<Employeeform/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
