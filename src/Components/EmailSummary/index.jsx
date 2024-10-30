import { Link, useSubmit } from "react-router-dom"
import OpenEmails from "../../Pages/OpenEmailPage"

function EmailSummary ({id, name, subject, body, date, read}) {
            
   
    return (
        <div className={`p-4 border-b border-gray-400 border-solid flex justify-between h-25" ${read == 1 ? "bg-header-grey text-white " : ""}`}>
            <Link to={`/emails/${id}`} onClick={<OpenEmails />}>
            <div>
                <h4 className="text-lg font-bold ">{name}</h4>
                <p className="font-medium">{subject}</p>
                <p>{body.slice(0, 22) + "..."}</p>
            </div>
            <div className="text-right w-40 font-bold">
                <p>{date.split(" ")[0]}</p>
            </div>
            </Link>
        </div>
    )
}

export default EmailSummary