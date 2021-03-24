import { useState } from "react"
import { Link } from "react-router-dom"

function ItemDetail({match, both, addToCart}){


    const [modal, showModal] = useState(false)
    
    const id = match.params.id
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    function changeState(){
        if (modal){
            showModal(false)
        }
        else{
            showModal(true)
        }
    }

    
    function blabla(){
        changeState()
        addToCart(both[id].name, both[id].price)
    }

    return(
        <div>

            <div className="image">
                <p>{lorem}</p>
            </div>
            <div className="text">
                <h2>{both[id].name}</h2>
                <h3>{"£" + both[id].price}</h3>
                <button onClick={blabla}>Add to Cart</button>
            </div>
            {modal ? <div className="modal">
                <div className="modal-stuff">
                {both[id].name + " Added to Cart!"}
                </div>
                <div className="modal-stuff stuff-button">
                <Link to={process.env.PUBLIC_URL + "/cart"}>
                <button>Go to Cart</button>
                </Link>
                </div>
                <div className="modal-stuff stuff-button">
                <button onClick={changeState}>Continue Shopping</button>
                </div>
                </div> : null}
        </div>
    )
}

export { ItemDetail }