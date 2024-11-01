import { useEffect, useState } from "react"
import EmailSummary from "../../Components/EmailSummary"
import NavLinks from "../../Components/NavLinks"

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
        <div className="lg:flex lg:justify-end lg:bg-modal-blue">
            <div className="hidden lg:block">
                <NavLinks />
            </div>
            <div className="lg:w-5/6 border-t-2 border-white lg:bg-white">
                {emailsDeleted.map(email => {
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

export default DeleteSummary