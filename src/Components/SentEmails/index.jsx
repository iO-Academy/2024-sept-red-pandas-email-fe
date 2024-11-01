import { useEffect, useState } from "react"
import EmailSummary from "../EmailSummary"
import NavLinks from "../NavLinks"

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
        <div className="lg:flex lg:justify-end lg:bg-modal-blue">
            <div className="hidden lg:block">
                <NavLinks />
            </div>
            <div className="lg:w-5/6 border-t-2 border-white">
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
        </div>
    )
}

export default SentEmails