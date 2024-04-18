import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {Context} from "../index";
import {authRoutes, publicRoutes} from "./routes";
import MainPage from "../pages/Design/MainPage/MainPage";

const AppRouter = () => {
     const {user} = useContext(Context);

    return (
        <div>
            <Routes>
                {user.isAuth && authRoutes.map(({path,Component})=>

                    <Route key={path} path={path} element={<Component/>}/>
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