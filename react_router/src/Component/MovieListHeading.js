import { Link } from "react-router-dom"

export const MovieListHeading=(props)=>{
    return(
        <div >
            <Link to={'/'}>
            <button className="btn">
            <h1>{props.heading}</h1>
            </button>
            </Link>
        </div>
    )
}