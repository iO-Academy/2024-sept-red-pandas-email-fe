import { Link } from "react-router-dom"

function NavLinks() {
    

    return(
        <div>
            <h2>New Email </h2>
            <Link to="/">Inbox</Link>
            <h2>Sent </h2>
            <h2>Deleted </h2>
        </div>
    )
}

export default NavLinks