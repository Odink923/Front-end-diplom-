import React from 'react';
import DropDownList from "../../components/DropDownList/DropDownList";
import DropDownItem from "./components/DropDownItem/DropDownItem";

const PartnersPage = () => {
    return (
        <div>
            <DropDownList>
                <DropDownItem title={`ЦПО "ВІЛЬНІ", ЛЬВІВ`} upItem={true}></DropDownItem>
                <DropDownItem title={`АНТИС-ОРТО, ЖИТОМИР`} ></DropDownItem>
                <DropDownItem title={`СМІЛИВИЙ КРОК, ЗАПОРІЖЖЯ`} ></DropDownItem>
                <DropDownItem title={`УКРПРОТЕЗ, КИЇВ`} ></DropDownItem>
                <DropDownItem title={`ОПОРА, ЧЕРНІВЦІ`} ></DropDownItem>
                <DropDownItem title={`СИГМА-ОРТО, ХАРКІВ`} ></DropDownItem>
                <DropDownItem title={`ТЕРНО-ТОП, ТЕРНОПІЛЬ`} ></DropDownItem>
                <DropDownItem title={`СУМСЬКИЙ ПРОТЕЗНО-ОРТОПЕДИЧНИЙ ЦЕХ`} downItem={true}></DropDownItem>
            </DropDownList>
        </div>
    );
};

export default PartnersPage;