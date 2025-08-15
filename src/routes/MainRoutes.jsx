import { createBrowserRouter } from "react-router";
import MainLayOut from "../layout/MainLayOut";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../auth/Login";
import SingUp from "../auth/SingUp";
import Game from "../pages/Game";
import MyMatches from "../pages/MyMatches";
import Reults from "../pages/Reults";
import Profile from "../pages/Profile";


const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut/>,
        children:[
            {
                path: '/top-nav',
                element: <Header/>
            },
            {
                path: '/footer',
                element: <Footer/>
            },
            {
                path: '/log-in',
                element: <Login/>
            },
            {
                path: '/sign-up',
                element: <SingUp/>
            },
            {
                path: '/',
                element: <Game/>
            },
            {
                path: '/my-matches',
                element: <MyMatches/>
            },
            {
                path: '/results',
                element: <Reults/>
            },
            {
                path: '/profile',
                element: <Profile/>
            },
        ]
    }
]);
export default MainRoutes;