import { useNavigate } from "react-router-dom";
// import NavBar from "../components/NavBar";
import CategorySelectionList from "../components/CategorySelectionList";
import SignOut from "../components/SignOut";
import { useState, useEffect } from "react";
import "../css/style.css"


const Root = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setUsername(localStorage.getItem("user"));
        } else {
            navigate('/signin')
        };
    }, []); 

    return (
        <div className="main-container">
            <header>
                <div className="inline-block welcome">
                    <h2>Welcome {username}, the bar is now yours!</h2>
                </div>
                <div className="inline-block">
                    if (localStorage.getItem("admin")) {<Admin />}
                    <SignOut />
                </div>
            </header>
            {/* <NavBar /> */}
            <div className="selectionlist">
                <CategorySelectionList />
            </div>
            <div className="selectionlist">
                
            </div>

        </div>
    );
};

export default Root;