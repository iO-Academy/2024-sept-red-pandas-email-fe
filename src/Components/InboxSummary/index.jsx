import { useEffect, useState } from "react"
import EmailSummary from "../EmailSummary"

function InboxSummary () {
    const [emails, setEmails] = useState([])

    function getEmails() {
        fetch('https://email-client-api.dev.io-academy.uk/emails')
        .then(res => res.json())
        .then(data => {
            setEmails(data.data)
        })
    }

    useEffect(getEmails, [])

    return (
        <div className="pt-16">
            {emails.map(email => {
                return (
                    <EmailSummary  
                        key={email.id}
                        id={email.id}
                        name={email.name}
                        subject={email.subject}
                        body={email.body}
                        date={email.date_created}
                        read={email.read}
                    />
                )
            })}
        </div>
    )
}

export default InboxSummary