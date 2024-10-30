import { Link } from "react-router-dom"


function GreyButton ({link, text}) {
    return (
        <div className="grid justify-items-end pt-4">
            <Link to={link} className="px-4 py-1.5 bg-gray-500 text-white rounded hover:bg-gray-600">
            {text}
            </Link>
        </div>
    )
}
export default GreyButton