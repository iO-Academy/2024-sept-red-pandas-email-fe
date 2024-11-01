import { useEffect, useState } from "react"
import EmailSummary from "../EmailSummary"

function SentEmails () {
    const [emails, setEmails] = useState([])

    function getEmails() {
        fetch('https://email-client-api.dev.io-academy.uk/emails/sent')
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

export default SentEmails