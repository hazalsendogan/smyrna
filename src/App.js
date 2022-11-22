import React,{useState} from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Home from "./components/Home";
import Fuarlar from "./components/KentCekim/Fuarlar";
import Hamamlar from "./components/KentCekim/Hamamlar";
import Kaplicalar from "./components/KentCekim/Kaplicalar";
import Meydanlar from "./components/KentCekim/Meydanlar";
import Plajlar from "./components/KentCekim/Plajlar";
import MetroHatlar from "./components/Metro/MetroHatlar";
import MetroSeferler from "./components/Metro/MetroSeferler";
import Metroİstas from "./components/Metro/Metroİstas";
import AntikKentler from "./components/TarihiYerler/AntikKentler";
import Hanlar from "./components/TarihiYerler/Hanlar";
import Muzeler from "./components/TarihiYerler/Muzeler";
import Hatlar from "./components/Tramvay/Hatlar";
import TramSefer from "./components/Tramvay/TramSefer";
import Tramİstas from "./components/Tramvay/Tramİstas";
function App() {
  const [isActive, setisActive] = useState(false);
  return (
    <main>

      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route  path="/metroizmir" element={<Hatlar/>}></Route>
        <Route  path="/tramline/:id" element={<Tramİstas/>}></Route>
        <Route  path="/tramsefer/:id" element={<TramSefer/>}></Route>
        <Route  path="/metroline" element={<Metroİstas/>}></Route>
        <Route  path="/metrosefer" element={<MetroSeferler/>}></Route>
        <Route  path="/fuarlar" element={<Fuarlar/>}></Route>
        <Route  path="/hamamlar" element={<Hamamlar/>}></Route>
        <Route  path="/kaplicalar" element={<Kaplicalar/>}></Route>
        <Route  path="/meydanlar" element={<Meydanlar/>}></Route>
        <Route  path="/plajlar" element={<Plajlar />}></Route>
        <Route  path="/muzeler" element={<Muzeler />}></Route> 
        <Route  path="/antik" element={<AntikKentler />}></Route>
        <Route  path="/hanlar" element={<Hanlar />}></Route>
      </Routes>
    </main>
  );
}

export default App;
