import React, {Profiler} from 'react';
import CarrouselProtezPage from "../components/protezpage/CarrouselProtezPage/CarrouselProtezPage";
import WriteToUs from "../components/mainpage/WriteToUs/WriteToUs";
import Footerr from "../components/UI/Footer/Footerr";
import BionicHandle from "../components/protezpage/BionicHandle/BionicHandle";
import Material from "../components/protezpage/Material/Material";


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