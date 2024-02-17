import React from 'react';
import DropDownList from "../../../../components/DropDownList/DropDownList";
import DropDownItem from "../UI/DropDownItem/DropDownItem";

const DoctorRehabilitation = () => {
    return (
        <div>
            <DropDownList>
                <DropDownItem title="ЛІКАР-РЕАБІЛІТОЛОГ" upItem={true}></DropDownItem>
                <DropDownItem title="ЛІКАР-РЕАБІЛІТОЛОГ"></DropDownItem>
                <DropDownItem title="ЛІКАР-РЕАБІЛІТОЛОГ" downItem={true}></DropDownItem>
            </DropDownList>
        </div>
    );
};

export default DoctorRehabilitation;