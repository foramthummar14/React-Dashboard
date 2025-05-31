import Sidebar from './componet/sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Loginform from './componet/loginform';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Loginform/>}/>
          <Route path='/sidebar' element={<Sidebar />} />
        </Routes>
      </BrowserRouter>

      {/* <Sidebar/> */}
    </>
  );
}

export default App;
