import Header from "./header";
import Sidebar from "./Sidebar";
import CocktailDisplay from "./CocktailDisplay";
import ParentComponent from "./ParentComponent";
import "./Frametwo.css"

const Frametwo = () => {
    return (
            <div className="frame-two">
                <Header />
                <div className="main-wrapper">
                <Sidebar />
                <CocktailDisplay cocktailId={33} />
                </div>
                <div className="selection">
                <ParentComponent />
                </div>
            </div>
       
    );
};

export default Frametwo;