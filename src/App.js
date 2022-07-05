import './App.scss';
import {Route, Routes} from "react-router-dom";
import Sidebar from "./Layouts/Sidebar/Sidebar";
import Popular from "./Pages/popular/Popular";
import All from "./Pages/all/All";
import Concerts from "./Pages/concerts/Concerts";
import Exhibitions from "./Pages/exhibition/Exhibitions";
import Fairs from "./Pages/fairs/Fairs";
import Festivals from "./Pages/festival/Festivals";
import Free from "./Pages/free/Free";
import Kids from "./Pages/kids/Kids";
import Movie from "./Pages/movie/Movies";
import Music from "./Pages/music/Musics";
import Performances from "./Pages/performances/Performances";
import Sport from "./Pages/sport/Sports";
import Various from "./Pages/various/Various";
import SingleDetailPages from "./Pages/singleDetailPage/SingleDetailPages";
import Order from "./Pages/order/Order";
import Register from "./Components/Register/Register";
import Header from "./Layouts/Header/Header";
import Footer from "./Layouts/Footer/Footer";

function App() {


  return (
      <>
        <Header/>
        <Sidebar>
          <Routes>
            <Route path='/' element={<Popular/>}/>
            <Route path='all/:id' element={<All/>}/>
            <Route path='concerts/:id' element={<Concerts/>}/>
            <Route path='exhibitions/:id' element={<Exhibitions/>}/>
            <Route path='fairs/:id' element={<Fairs/>}/>
            <Route path='festivals/:id' element={<Festivals/>}/>
            <Route path='free/:id' element={<Free/>}/>
            <Route path='kids/:id' element={<Kids/>}/>
            <Route path='movie/:id' element={<Movie/>}/>
            <Route path='music/:id' element={<Music/>}/>
            <Route path='performances/:id' element={<Performances/>}/>
            <Route path='sport/:id' element={<Sport/>}/>
            <Route path='other/:id' element={<Various/>}/>
            <Route path='single/:id' element={<SingleDetailPages/>}/>
            <Route path='order/:id' element={<Order/>}/>
            <Route path='register' element={<Register/>}/>
          </Routes>
        </Sidebar>
        <Footer/>
      </>
  );
}

export default App;
