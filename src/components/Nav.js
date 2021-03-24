import { Link } from "react-router-dom"

function Nav(){
    return(
        <nav>
            <ul>
                <Link className="navstyle" to={process.env.PUBLIC_URL + "/"}>
                    <li>Home</li>
                </Link>
                <Link className="navstyle" to={process.env.PUBLIC_URL + "/shop"}>
                    <li>Shop</li>
                </Link>
                <Link className="navstyle" to={process.env.PUBLIC_URL + "/cart"}>
                    <li>Cart</li>
                </Link>
            </ul>
        </nav>
    )
}

export { Nav }