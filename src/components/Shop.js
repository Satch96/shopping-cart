import { Link } from "react-router-dom"

function Shop({both}){

    return(
        <div className="items-container">
            {both.map((x,i)=>{
                if (i%3===0){
                    return (
                        <Link to={`/shop/${x.id}`}key={x.id}>
                            <div className="items newline" >
                                <div>{x.name}</div>
                                <div>{"£ " + x.price}</div>
                            </div>
                        </Link>
                    )    
                }
                else{
                    return (
                        <Link to={`/shop/${x.id}`} key={x.id} name={x.name}>
                        <div className="items">
                            <div>{x.name}</div>
                            <div>{"£ " + x.price}</div>
                        </div>
                        </Link>
                    )
                }
            })}
        </div>
    )
}



export { Shop }