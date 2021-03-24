import { Link } from "react-router-dom"

function Nav(){
    return(
        <nav>
            <ul>
                <Link className="navstyle" to="/">
                    <li>Home</li>
                </Link>
                <Link className="navstyle" to="/shop">
                    <li>Shop</li>
                </Link>
                <Link className="navstyle" to="/cart">
                    <li>Cart</li>
                </Link>
            </ul>
        </nav>
    )
}

export { Nav }