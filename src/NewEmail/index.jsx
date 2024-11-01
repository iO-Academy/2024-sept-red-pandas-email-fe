import NavLinks from "../Components/NavLinks/index.jsx";
import Form from "./Form/index.jsx";

function NewEmail() {
    return (
        <div className="flex items-center bg-gray-100 text-white lg:flex lg:justify-end">
            <div className="hidden lg:block">
                <NavLinks />
            </div>
            <div className="w-full lg:w-5/6 border-t-2 border-white">
                <Form />
            </div>
        </div>
    );
}

export default NewEmail;

