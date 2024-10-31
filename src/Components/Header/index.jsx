import Nav from "../Nav"

function Header() {
    return(
        <div className='bg-header-grey text-white m-0 p-4 h-20 flex justify-between items-center'>
            <div className="flex justify-between items-center">
                <Nav />
                <h1 className='text-xl font-500 ml-4 lg:ml-0 lg:text-3xl lg:font-700'>Email Client</h1>
            </div>    
            <h2 className='text-sm'> <i className='fa-solid fa-user text-black border border-black rounded-full p-0.5' ></i> User <br/>Name</h2>
        </div>
    )
}

export default Header