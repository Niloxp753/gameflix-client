import Register from "pages/Register/index";
import Home from "pages/Home/index";
import Login from "pages/Login/index";
import { Route, Routes } from "react-router-dom";
import { RoutePath } from "types/routes";
import { Homepage } from "pages/Homepage/index";
import Profile from "pages/Profile";
import { GameDetails } from "pages/GameDetails/index";

const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.HOME} element={<Home />} />
            <Route path={RoutePath.LOGIN} element={<Login />} />
            <Route path={RoutePath.REGISTER} element={<Register />} />
            <Route path={RoutePath.PROFILE} element={<Profile />} />
            <Route path={RoutePath.HOMEPAGE} element={<Homepage />} />
            <Route path={RoutePath.GAMES} element={<GameDetails />} />
        </Routes>
    )
}

export default Router;