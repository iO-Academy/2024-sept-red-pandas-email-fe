import { Link } from "react-router-dom"


function GreyButton ({link, text}) {
    return (
            <Link to={link} className="px-4 py-1.5 bg-gray-500 text-white rounded hover:bg-gray-600">
            {text}
            </Link>
    )
}
export default GreyButton