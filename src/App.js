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
import SearchDonorByGroupAndArea from "./Pages/Home/SearchDonorByGroupAndArea/SelectGroup_SearchDonorByGroupAndArea";
import SelectGroup_SearchDonorByGroupAndArea from "./Pages/Home/SearchDonorByGroupAndArea/SelectGroup_SearchDonorByGroupAndArea";
import SelectArea_SearchDonorByGroupAndArea from "./Pages/Home/SearchDonorByGroupAndArea/SelectArea_SearchDonorByGroupAndArea";
import PublicDonorList from "./Pages/Home/SearchDonorByGroupAndArea/PublicDonorList";
import AddDonor from "./Pages/User/AddDonor/AddDonor";
import MENU from "./Pages/Shared/MENU/MENU";
import ContactUs from "./Pages/Home/ContactUs/ContactUs";
import PrivacyPolicy from "./Pages/Home/PrivacyPolicy/PrivacyPolicy";
import Credits from "./Pages/Home/Credits/Credits";
import ChangeAreaOrLastDonationDate from "./Pages/User/ChangeAreaOrLastDonationDate/ChangeAreaOrLastDonationDate";
import UpdateLastDonationDate from "./Pages/User/ChangeAreaOrLastDonationDate/UpdateLastDonationDate";
// import ManageUsers from './Pages/Admin/ManageUsers/ManageUsers';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/menu" element={<MENU></MENU>}></Route>
        <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
        <Route path="/appCredit" element={<Credits></Credits>}></Route>
        <Route
          path="/changeAreaOrLastDonationDate"
          element={
            <ChangeAreaOrLastDonationDate></ChangeAreaOrLastDonationDate>
          }
        ></Route>

        <Route
          path="/updateLastDonationDate"
          element={<UpdateLastDonationDate></UpdateLastDonationDate>}
        ></Route>
        <Route
          path="/privacyPolicy"
          element={<PrivacyPolicy></PrivacyPolicy>}
        ></Route>

        {/* <Route path="/addDonor" element={<}></Route> */}
        <Route path="/addDonor" element={<AddDonor></AddDonor>}></Route>

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
        <Route
          path="/selectBloodGroup/"
          element={
            <SelectGroup_SearchDonorByGroupAndArea></SelectGroup_SearchDonorByGroupAndArea>
          }
        ></Route>
        <Route
          path="/selectArea/:bloodGroup"
          element={
            <SelectArea_SearchDonorByGroupAndArea></SelectArea_SearchDonorByGroupAndArea>
          }
        ></Route>
        <Route
          path="/selectArea/:bloodGroup/:donorArea"
          element={<PublicDonorList></PublicDonorList>}
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
      <h1 className="py-[15px]"></h1>
    </div>
  );
}

export default App;
