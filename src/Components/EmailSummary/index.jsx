import { Link } from "react-router-dom"

function EmailSummary ({name, subject, body, date}) {

    return (
        <div>
            {/* <Link to="/emails/:id"> */}
                <h4>{name}</h4>
                <p>{subject}</p>
                <p>{body}</p>
                <p>{date}</p>
            {/* </Link> */}
          
        </div>
    )
}

export default EmailSummary


