import uniqid from "uniqid"

function Cart({cart, total, changeCart}){

    function handleChange(e){

        if (e.target.value !== ""){
            for (let i = 0; i < cart.length; i++){
                if (cart[i].name === e.target.name){
                    
                    const clone = [...cart];
                    clone[i].amount = parseInt(e.target.value)
                    changeCart(clone)
                }
            }
        }
    }

    function removeItem(e){
        console.log(e.target.value)
        for (let i = 0; i < cart.length; i++){
            if (cart[i].name === e.target.value){
                
                const clone = [...cart];
                clone.splice(i,1)
                changeCart(clone)
            }
        }
       
    }

    const lorem = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
    return(
        <div className="cart-container">
            <div className="total">
                <h2>{"Sub-total: £" + total.toFixed(2)}</h2>
                <button onClick={()=>alert("Thanks for visiting")}>CHECKOUT</button>
            </div>
            <div className="title">
                <h2>Shopping Bag</h2>
            </div>
            {cart.length === 0 ?
            <div className="cart"><h3>Your Shopping Bag is Empty</h3></div> : 
            cart.map((x,i)=>{
                return (
                    <div className="cart" key={uniqid()}>
                        <div className="cart-image">{lorem}</div>
                        <div className="cart-text">
                            <div><h3>{x.name}</h3></div>
                            <div><h3>{"£ " + x.price}</h3></div>
                            <div>
                                <h3>Qty: </h3><input name={x.name} value={x.amount} onChange={(e)=>handleChange(e)}type="number" min="1" max="10"></input>
                            </div>
                            <div>
                                <button value={x.name}onClick={(e)=>removeItem(e)}>Remove</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export { Cart }