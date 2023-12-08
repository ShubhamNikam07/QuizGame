import logo from './logo.svg';
import { Routes,Route } from 'react-router-dom';
import { Navbar } from './component/Navbar';
import {Home} from "./component/Home";
import {Question} from "./component/Question";
import {Quiz} from "./component/Quiz"
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/quiz' element={<Quiz/>}/>

     </Routes>
    </div>
  );
}

export default App;
