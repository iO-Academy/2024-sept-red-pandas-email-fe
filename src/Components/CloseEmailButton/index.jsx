import { Link } from "react-router-dom"

function CloseEmailButton (){
    return (
        <div className="grid justify-items-end pt-4">
            <button className="px-4 py-1.5 bg-gray-500 text-white rounded hover:bg-gray-600">
                 <Link to="./pages/HomePage">Return to Inbox</Link>
            </button>
        </div>
    )
}
export default CloseEmailButton