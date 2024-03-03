import React, {Profiler} from 'react';
import Carrousel from "../UI/Carrousel/Carrousel";
import CarrouselProtezPage from "./CarrouselProtezPage/CarrouselProtezPage";
import WriteToUs from "../mainpage/WriteToUs/WriteToUs";
import Footerr from "../UI/Management/Footer/Footerr";


const ProtezPage = () => {

    return (
        <div>
            {/*<BionicHandle></BionicHandle>*/}
            {/*<Material></Material>*/}
            <CarrouselProtezPage></CarrouselProtezPage>
            <WriteToUs></WriteToUs>
            <Footerr></Footerr>
        </div>
    );
};

export default ProtezPage;