import { useState } from "react"
import NavLinks from "../NavLinks"

function Nav() {

   const [modalOpen, setModalOpen] = useState(false)

   function handleClick() {
    setModalOpen(!modalOpen)
   }
   return (
    <div>
        <button onClick={handleClick}>{modalOpen ? '' : ''} MENU</button>
        {modalOpen && <NavLinks />} 
    </div>
   )

}

export default Nav