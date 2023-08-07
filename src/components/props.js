
function P(props){
    const{branch,ranks=[],collage="not mentioned",}=props;
    
    return(
        <div>
            <h1>{branch}-Total Marks</h1>
            <h1>{collage}</h1>
            {
                ranks.map((ranks)=>{
                    return <p>{ranks}</p>
                })
            }
            
        </div>
    )
}
export default P;