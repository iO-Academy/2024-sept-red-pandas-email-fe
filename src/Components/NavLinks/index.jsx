import { Link } from "react-router-dom"

function NavLinks({handleClick}) {
    return(
        <div>
            <nav className='bg-modal-blue fixed right-2/4 top-20 w-1/2 h-screen pl-4 pt-8 flex flex-col gap-y-10'>
                <Link to="/" onClick={handleClick}>Inbox</Link>
            </nav>
        </div>
    )
}

export default NavLinks