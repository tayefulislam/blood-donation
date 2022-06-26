import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './Pages/Shared/Header/Header';
import MakeBloodRequest from './Pages/User/MakeBloodRequest/MakeBloodRequest';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import DonorProfile from './Pages/Donors/DonorProfile/DonorProfile';

function App() {
  return (
    <div >

      <Header></Header>

      <Routes>

        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/makeRequests' element={<MakeBloodRequest></MakeBloodRequest>}></Route>


        {/* donor */}

        <Route path='profile' element={<DonorProfile></DonorProfile>}></Route>




        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>




      <ToastContainer />

    </div>
  );
}

export default App;
