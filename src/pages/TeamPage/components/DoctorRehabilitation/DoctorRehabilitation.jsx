import React from 'react';
import DropDownList from "../../../../components/DropDownList/DropDownList";
import DropDownItem from "../UI/DropDownItem/DropDownItem";

const DoctorRehabilitation = () => {
    return (
        <div>
            <DropDownList>
                <DropDownItem title="КАСТОМНІ ОБОЛОНКИ" upItem={true}></DropDownItem>
            </DropDownList>
        </div>
    );
};

export default DoctorRehabilitation;