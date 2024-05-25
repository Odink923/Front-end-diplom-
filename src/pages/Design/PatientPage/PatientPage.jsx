import React from 'react';
import Footerr from "../UI/Managament/Footer/Footerr";
import WriteToUs from "../MainPage/components/WriteToUs/WriteToUs";
import PatientLogo from "./components/PatientLogo/PatientLogo";

const PatientPage = () => {
    return (
        <div>
            <PatientLogo visible={false} ></PatientLogo>
            <div style={{ marginTop: "235px", marginBottom: "326px" }}>
                <WriteToUs register={true} title={"Дайте відповідь на декілька запитань і ми зв’яжемося з вами найближчим часом"}></WriteToUs>
                </div>
            <Footerr></Footerr>
        </div>

    );
};

export default PatientPage;