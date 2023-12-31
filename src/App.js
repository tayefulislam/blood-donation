import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./Pages/Shared/Header/Header";

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";

import AddDonor from "./Pages/User/AddDonor/AddDonor";
import AddDonorConfirmation from "./Pages/User/Messages/AddDonorConfirmation";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        {/* <Route path="/addDonor" element={<}></Route> */}
        <Route path="/addDonor" element={<AddDonor></AddDonor>}></Route>
        <Route
          path="/AddDonorConfirmation"
          element={<AddDonorConfirmation></AddDonorConfirmation>}
        ></Route>
      </Routes>

      <ToastContainer />
      <h1 className="py-[15px]"></h1>
    </div>
  );
}

export default App;
