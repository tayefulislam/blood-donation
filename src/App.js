import logo from "./logo.svg";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./Pages/Shared/Header/Header";
import MakeBloodRequest from "./Pages/User/MakeBloodRequest/MakeBloodRequest";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import DonorProfile from "./Pages/Donors/DonorProfile/DonorProfile";
import Login from "./Pages/Login/Login";
import MatchBooldRequest from "./Pages/Donors/MatchBloodRequest/MatchBooldRequest";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RequireAuth from "./Pages/Auths/RequireAuth/RequireAuth";
import RecentRequests from "./Pages/Home/RecentRequests/RecentRequests";
import RequestDetails from "./Pages/Shared/RequestDetails/RequestDetails";
import ManagerUsers from "./Pages/Admin/ManageUsers/ManagerUsers";
import ManageRequest from "./Pages/Admin/ManageRequest";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
// import ManageUsers from './Pages/Admin/ManageUsers/ManageUsers';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route
          path="/makeRequests"
          element={<MakeBloodRequest></MakeBloodRequest>}
        ></Route>

        <Route
          path="/recentRequests"
          element={<RecentRequests></RecentRequests>}
        ></Route>

        <Route
          path="/requestDetails/:reqId"
          element={<RequestDetails></RequestDetails>}
        ></Route>

        {/* admin and donor */}

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        ></Route>

        {/* Only Admin  */}

        <Route
          path="/dashboard/users"
          element={
            <RequireAuth>
              <ManagerUsers></ManagerUsers>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/dashboard/blood-requests"
          element={<ManageRequest></ManageRequest>}
        ></Route>

        {/* donor */}

        <Route
          path="profile"
          element={
            <RequireAuth>
              <DonorProfile></DonorProfile>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/bloodRequests"
          element={
            <RequireAuth>
              <MatchBooldRequest></MatchBooldRequest>
            </RequireAuth>
          }
        ></Route>

        {/* login , register and reset*/}

        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/reset" element={<ResetPassword></ResetPassword>}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
