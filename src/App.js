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
import Login from './Pages/Login/Login';
import MatchBooldRequest from './Pages/Donors/MatchBloodRequest/MatchBooldRequest';
import Dashboard from './Pages/Dashboard/Dashboard';
import RequireAuth from './Pages/Auths/RequireAuth/RequireAuth'
import RecentRequests from './Pages/Home/RecentRequests/RecentRequests';

function App() {
  return (
    <div >

      <Header></Header>

      <Routes>

        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/makeRequests' element={<MakeBloodRequest></MakeBloodRequest>}></Route>

        <Route path='/recentRequests' element={<RecentRequests></RecentRequests>}></Route>


        {/* admin and donor */}

        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}></Route>


        {/* donor */}

        <Route path='profile' element={<RequireAuth><DonorProfile></DonorProfile></RequireAuth>}></Route>

        <Route path='/bloodRequests' element={<RequireAuth><MatchBooldRequest></MatchBooldRequest></RequireAuth>}></Route>


        {/* login and register */}

        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

      </Routes>




      <ToastContainer />

    </div>
  );
}

export default App;
