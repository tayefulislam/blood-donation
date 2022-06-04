import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import MakeBloodRequest from './Pages/User/MakeBloodRequest/MakeBloodRequest';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >

      <Header></Header>

      <Routes>

        <Route path='/makeRequests' element={<MakeBloodRequest></MakeBloodRequest>}></Route>
      </Routes>



    </div>
  );
}

export default App;
