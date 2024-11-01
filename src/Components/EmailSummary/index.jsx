import { Link } from "react-router-dom"

function EmailSummary ({id, name, subject, body, date, read, handleClick}) {
    return (
        <Link to={`/emails/${id}`} onClick={handleClick} className={`p-4 border-b border-gray-400 border-solid flex justify-between h-25 ${read == 1 ? "bg-header-grey text-white " : ""}`}>
            <div>
                <h4 className="text-lg font-semibold ">{name}</h4>
                <p className="font-medium">{subject}</p>
                <p>{body.slice(0, 22) + "..."}</p>
            </div>
            <div className="text-right w-40 font-bold">
                <p>{`${date.split(" ")[0].split("-").reverse().join("/")}`}</p>
            </div>  
        </Link>
    )
}

export default EmailSummary