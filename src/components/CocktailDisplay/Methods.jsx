const Method = ({cocktailData}) => {
    const method = cocktailData && cocktailData.method ? cocktailData.method.split('. ') : [] ;

    return (
        <>
        <div className="methods-container">
            <h2>Method</h2>
            {method.map((step, index) => {
                return <p key={index}>{index + 1}. {step}</p>
            })}
        </div>
        </>
    );
};

export default Method;
