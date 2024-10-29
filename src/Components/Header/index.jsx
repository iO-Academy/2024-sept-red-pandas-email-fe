import Nav from "../Nav"

function Header() {
    return(
        <div className='bg-header-grey text-white m-0 p-4 flex justify-between'>
            <Nav />
            <h1 className='text-xl'>Email Client</h1>
            <h2> <i className='fa-solid fa-user text-black border border-black rounded-full p-0.5' ></i> User Name</h2>
        </div>
    )
}

export default Header