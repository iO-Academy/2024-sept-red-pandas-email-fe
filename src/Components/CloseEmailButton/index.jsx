import { Link } from "react-router-dom"

function CloseEmailButton (){

    return (
        <div className="grid justify-items-end pt-4">
            <button className="font-bold text-2xl border-4 border-red-600  px-1">
                 <Link to="./pages/HomePage"> X </Link>
        </button>
        </div>
    )

}
export default CloseEmailButton