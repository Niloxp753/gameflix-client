import Register from "pages/Register/index";
import Home from "pages/Home/index";
import Login from "pages/Login/index";
import { Route, Routes } from "react-router-dom";
import { RoutePath } from "types/routes";
import { Homepage } from "pages/Homepage/index";
import Profile from "pages/Profile";
import { GameDetails } from "pages/GameDetails/index";
import { GenreGames } from "pages/GenreGames";

const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.HOME} element={<Home />} />
            <Route path={RoutePath.LOGIN} element={<Login />} />
            <Route path={RoutePath.REGISTER} element={<Register />} />
            <Route path={RoutePath.PROFILE} element={<Profile />} />
            <Route path={RoutePath.HOMEPAGE} element={<Homepage />} />
            <Route path={RoutePath.GAMES} element={<GameDetails />} />
            <Route path={RoutePath.SETTINGS_GAMES} element={<GenreGames />} />
            <Route path={RoutePath.SETTINGS_GENDERS} element={<GenreGames />} />
            {/* <Route path={RoutePath.SETTINGS_USERS} element={<GenreGames />} /> */}
        </Routes>
    )
}

export default Router;