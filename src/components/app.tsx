import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import Navbar from './Navbar/Navbar';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "./NotFound/NotFound";
import Home from "./Home/Home";
import Admin from "./Admin/Admin";
import Pass from "./Pass/Pass";
import Crud from "./Spaces/CrudSpaces";
import CarnetEntretien from './Carnets/CarnetEntretien';
import CarnetAnimal from './Carnets/CarnetAnimal';
import Stats from './Stats/Stats';

const App:React.FC = ()=> {
    const [test, setTest] = useState<boolean>(false)

    const handleValidateForm = ( userName:string, password:string, log:boolean) =>{
        setTest(log)
    }

    return(
    <BrowserRouter>
            <Navbar />
        
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Admin" element={<Admin userName="" password="" onValidate={handleValidateForm} />} />
              <Route path="/Pass" element={<Pass />} />
              <Route path="/Crud" element={<Crud />} />
              <Route path="/CarnetEntretien" element={<CarnetEntretien />} />
              <Route path="/CarnetAnimal" element={<CarnetAnimal />} />
              <Route path="/Stats" element={<Stats />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
    </BrowserRouter>)
}

export default App