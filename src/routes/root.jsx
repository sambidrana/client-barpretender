import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Root = ( props ) => {

    return (
        <div className="container">
            <NavBar />
            <Outlet />
        </div>
    );
};

export default Root;