import React from 'react';


import {Navigate, Route, Routes as ReactRoutes} from "react-router-dom";
import PetFacts from "../pages/PetFacts.jsx";
import PetFact from "../pages/PetFact.jsx";


const Routes = () => {
    return (


            <ReactRoutes>
                <Route path="/pet-facts" element={ <PetFacts/> } ></Route>
                <Route path="/pet-facts/:id" element={ <PetFact/> } ></Route>
            </ReactRoutes>


    );
};

export default Routes;
