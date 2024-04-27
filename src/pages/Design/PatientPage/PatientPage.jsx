import React from 'react';
import LogoBlog from "../BlogPage/components/LogoBlog/LogoBlog";
import Footerr from "../UI/Managament/Footer/Footerr";
import WriteToUs from "../MainPage/components/WriteToUs/WriteToUs";

const PatientPage = () => {
    return (
        <div>
            <LogoBlog visible={false} ></LogoBlog>
            <div style={{ marginTop: "235px", marginBottom: "326px" }}>
                <WriteToUs register={true} ></WriteToUs></div>
            <Footerr></Footerr>
        </div>

    );
};

export default PatientPage;