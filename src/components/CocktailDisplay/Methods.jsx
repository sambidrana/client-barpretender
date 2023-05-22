const Method = ({cocktailData}) => {
    const method = cocktailData ? cocktailData.method : "" ;
        
        return(
        <>
        <div className="methods-container">
            <h2>Method</h2>
            <p>{ method } </p>

        </div>
        </>
    );
};

export default Method;
