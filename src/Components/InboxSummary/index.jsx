import { useEffect, useState } from "react"
import EmailSummary from "../EmailSummary"
import NavLinks from "../NavLinks"

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
        <div className="lg:flex lg:justify-end">
            <div className="hidden lg:block">
                <NavLinks />
            </div>
            <div className="lg:w-5/6">
                {emails.map(email => {
                return (
                    <EmailSummary  
                        key={email.email}
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

export default InboxSummary