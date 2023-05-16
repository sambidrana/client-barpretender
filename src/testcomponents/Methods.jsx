// import { useState, useEffect  } from "react";
// import axios from "axios";

// const SERVER_URL = 'http://localhost:3000/barpretender/cocktails';
const Methods = ({cocktailData}) => {
    const methods = cocktailData ? cocktailData.method : "" ;
    //     const[method, setMethod] = useState ("");

    //     const fetchMethod = () =>{
    //         axios(SERVER_URL).then((response)=> {
    //             const methodForCocktail = (response.data[0].method);
    //             setMethod(methodForCocktail);
    //         });
    //     };

    // useEffect(()=> {
    //     fetchMethod();
    // }, []);
    // console.log("method" method )

        
        return(
        <>
        <div className="methods-container">
            <h2>Methods</h2>
            <p>{methods} </p>

        </div>
        </>
    );
};

export default Methods