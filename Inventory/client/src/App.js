import logo from './logo.svg';
import './App.css';
import AddUser from './components/adduser';
import Allusers from './components/allusers';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Inventory from './components/inventory';
import NavBar from './components/Navbar';
import EditUser from './components/edit';
import AddBeds from './components/add_bed';
import Files from './components/addfiles';
// import AddUser from './components/adduser';

function App() {
  return (
   <>
   {/* <AddUser /> */}
   <BrowserRouter>
   <NavBar />
  <Routes>
    <Route path='/' element={<Inventory />} />
   <Route path='/add' element={<AddUser />} />
   <Route path='/all' element={<Allusers />} />
   <Route  path='/edit/:id' element={<EditUser />}/>
   <Route path='/addbed' element={<AddBeds />}/>
  </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
