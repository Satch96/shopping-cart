import { Link } from "react-router-dom"


function Home(){
    
    return(
        <div>
            <h2>Home</h2>
            <p>More to Come</p>
            <Link to={process.env.PUBLIC_URL + "/shop"}>
            <button className="home-button">Visit Shop</button>
            </Link>
        </div>
    )
}

export { Home }