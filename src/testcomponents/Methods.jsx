
const Methods = ({cocktailData}) => {
    const methods = cocktailData ? cocktailData.method : "" ;
    

        
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