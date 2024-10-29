import Form from "./Form/index.jsx";

function NewEmail() {
    return (
        <div className="flex items-center bg-gray-100 text-white">
            <div className="w-full">
                <nav className="flex items-center justify-between bg-gray-500 p-6 ">
                    <button className="rounded border border-white pt-0.5 pl-3 pr-3 font-bold text-lg lg:hidden">MENU</button>
                    <h3 className="pr-20 text-2xl font-bold">Email Client</h3>
                    <div className="flex items-center text-white">
                        <span className="font-semibold">User Name</span>
                    </div>
                </nav>
                <Form />
            </div>
        </div>
    );
}

export default NewEmail;

