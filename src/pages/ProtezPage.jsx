import React, {Profiler} from 'react';
import Carrousel from "../components/UI/Carrousel/Carrousel";
import CarrouselProtezPage from "../components/protezpage/CarrouselProtezPage/CarrouselProtezPage";
import WriteToUs from "../components/mainpage/WriteToUs/WriteToUs";
import Footerr from "../components/UI/Footer/Footerr";


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