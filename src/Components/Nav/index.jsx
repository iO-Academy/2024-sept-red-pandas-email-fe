import { useState } from "react"
import NavLinks from "../NavLinks"

function Nav() {
    const [modalOpen, setModalOpen] = useState(false)

    function handleClick() {
        setModalOpen(!modalOpen)
    }

    return (
        <div>
            <button className='border px-3 rounded' onClick={handleClick}>MENU</button>
            {modalOpen && <NavLinks handleClick={handleClick} />} 
        </div>
    )
}

export default Nav