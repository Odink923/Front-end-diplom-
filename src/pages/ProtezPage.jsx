import React, {Profiler} from 'react';
import Carrousel from "../components/Design/UI/Carrousel/Carrousel";
import CarrouselProtezPage from "../components/Design/protezpage/CarrouselProtezPage/CarrouselProtezPage";
import WriteToUs from "../components/Design/mainpage/WriteToUs/WriteToUs";
import Footerr from "../components/Design/UI/Management/Footer/Footerr";


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