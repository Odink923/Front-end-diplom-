import React, {Profiler} from 'react';
import CarrouselProtezPage from "./components/CarrouselProtezPage/CarrouselProtezPage";
import WriteToUs from "../MainPage/components/WriteToUs/WriteToUs";
import Footerr from "../../components/Footer/Footerr";
import BionicHandle from "./components/BionicHandle/BionicHandle";
import Material from "./components/Material/Material";


const ProtezPage = () => {

    return (
        <div>
            <BionicHandle></BionicHandle>
            <Material></Material>
            <CarrouselProtezPage></CarrouselProtezPage>
            <WriteToUs></WriteToUs>
            <Footerr></Footerr>
        </div>
    );
};

export default ProtezPage;