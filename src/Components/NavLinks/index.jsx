import { Link } from "react-router-dom"

function NavLinks({handleClick, getEmailsDeleted}) {
    const handleDeletedClick = () => {
        handleClick()
        getEmailsDeleted()
    }
    
    return(
        <div>
            <nav className='bg-modal-blue text-white fixed left-0 top-20 w-1/2 h-screen pl-4 pt-8 flex flex-col gap-y-10 lg:w-1/6'>
                <Link to="/compose" onClick={handleClick}>New Email</Link>
                <Link to="/" onClick={handleClick}>Inbox</Link>
                <Link to="/sent" onClick={handleClick}>Sent</Link>
                <Link to="/deleted" onClick={handleDeletedClick}>Deleted</Link>
            </nav>
        </div>
    )
}

export default NavLinks