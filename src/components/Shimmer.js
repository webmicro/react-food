const Shimmer = () => {
     return (
            <div className="shimmer">
                {
                    Array(12).fill('').map( (ele, index)=>{ 
                        return (
                            <div className="card_item"  key={index}>
                            <div><img src="" /></div>
                            <h2></h2>
                            <span></span>
                            <p>
                                <span className="rating"></span>
                                <span className="distance"></span>
                                <span className="price"></span>
                            </p>
                        </div>  
                        )
                    })
                }
            </div>
    )
}
export default Shimmer;