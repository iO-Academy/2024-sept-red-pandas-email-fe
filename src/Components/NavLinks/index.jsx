import { Link } from "react-router-dom"

function NavLinks({handleClick, getEmailsDeleted}) {
    return(
        <div>
            <nav className='bg-modal-blue text-white fixed right-2/4 top-20 w-1/2 h-screen pl-4 pt-8 flex flex-col gap-y-10 lg:w-1/6 lg:left-0'>
                <Link to="/" onClick={handleClick}>Inbox</Link>
                <Link to="/deleted" onClick={getEmailsDeleted}>Deleted</Link>
            </nav>
        </div>
    )
}

export default NavLinks