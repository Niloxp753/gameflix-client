import Home from "pages/Home/index";
import Login from "pages/Login/index";
import { Route, Routes } from "react-router-dom";
import { RoutePath } from "types/routes";

const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.HOME} element={<Home />} />
            <Route path={RoutePath.LOGIN} element={<Login />} />
        </Routes>
    )
}

export default Router;