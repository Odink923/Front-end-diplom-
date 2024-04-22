import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {Context} from "../index";
import {authRoutes, publicRoutes} from "./routes";
import MainPage from "../pages/Design/MainPage/MainPage";
import Users from "../pages/Admin/Users/Users";
import ElementVisit from "../pages/Admin/UI/Elements/ElementVisit/ElementVisit";
import ElementUser from "../pages/Admin/UI/Elements/ElementUser/ElementUser";
import AddVisit from "../pages/Admin/Calendar/AddVisit";

const AppRouter = () => {
     const {user} = useContext(Context);

    return (
        <div>
            <Routes>
                {user.isAuth && authRoutes.map(({path,Component,ComponentOutlet})=>

                    <Route key={path} path={path} element={<Component/>}>
                        <Route path="user" element={<Users />} />
                        <Route path="visit" element={<Users visit={true} />} />
                        <Route path="addVisit" element={<AddVisit/>} />
                    </Route>
                )}
                {publicRoutes.map(({path,Component})=>
                    <Route key={path} path={path} element={<Component/>}/>
                )}
                <Route  path="*" element={<MainPage/>}/>
            </Routes>
        </div>
    );
};

export default AppRouter;