import { useEffect, useState } from "react"
import EmailSummary from "../../Components/EmailSummary"

function DeleteSummary() {
    
    const [emailsDeleted, setEmailsDeleted] = useState([])

    function getEmailsDeleted() {
        fetch('https://email-client-api.dev.io-academy.uk/emails/deleted')
        .then(res => res.json())
        .then(data => {
            setEmailsDeleted(data.data)
        })
    }

    useEffect(getEmailsDeleted, [])

    return (
        <div className="pt-16">
            {emailsDeleted.map(emailsDeleted => {
                return (
                    <EmailSummary  
                        key={emailsDeleted.id}
                        id={emailsDeleted.id}
                        name={emailsDeleted.name}
                        subject={emailsDeleted.subject}
                        body={emailsDeleted.body}
                        date={emailsDeleted.date_created}
                        read={emailsDeleted.read}
                    />
                )
            })}
        </div>
    )
}

export default DeleteSummary