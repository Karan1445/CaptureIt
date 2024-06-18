import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import LoginPage from './loginPage';
import Home from './Home';
import Addcemera from './Addcemera';
import Mycemera from './Mycemera';
import Hirecem from './Hirecem';
import Myhired from './Myhired';
import Approval from './Approvals';
import Notify from './MyNotification';
import Editcem from './EditCem';
import Myprofile from './MyProfile';
import Update from './Updateprofile';
import Admin from './Admin';
import Useradmin from './UserAdmin';
import Cemeraadmin from './CemeraAdminInfo';
import UpdatepAdmin from './UpdateProfileAdmin';
import UpdateAdminCem from './UpdatecemeraAdmin';

function App() {
  return (
   <BrowserRouter>
    <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/home' element={<Home />}/>
        <Route path="/newCemera" element={<Addcemera/>} />
        <Route path="/myCem" element={<Mycemera />}/>
        <Route path='/HireCem/:id' element={<Hirecem/>}/>
        <Route path="/MyHired" element={<Myhired/>}/>
        <Route path="/Approvals" element={<Approval/>}/>
        <Route path="/notify" element={<Notify/>}/>
        <Route path="/edit/:id" element={<Editcem/>}/>
        <Route path="/profile" element={<Myprofile/>}/>
        <Route path="/update" element={<Update/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/user" element={<Useradmin/>}/>
        <Route path="/admin/cemera" element={<Cemeraadmin/>}/>
        <Route path='/admin/profileUpdate/:id' element={<UpdatepAdmin/>}/>
        <Route path="/admin/cemupdate/:id" element={<UpdateAdminCem/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
