import { useState } from "react"
import { Link } from "react-router-dom"

function NavLinks() {
    const [modalClose, setModalClose] = useState (true)

   function handleClickLink() {
    setModalClose(false)
   }

    return(
        <div>
            {modalClose && (
                <nav className='bg-modal-blue fixed right-2/4 top-20 w-1/2 h-screen pl-4 pt-8 flex flex-col gap-y-10'>
                    <Link to="/email" onClick={handleClickLink}> New Email</Link>
                    <Link to="/" onClick={handleClickLink}>Inbox</Link>
                    <Link to="/sent" onClick={handleClickLink}>Sent</Link> 
                    <Link to="/deleted" onClick={handleClickLink}>Deleted</Link>
                </nav>
            )}
        </div>
    )
}

export default NavLinks

