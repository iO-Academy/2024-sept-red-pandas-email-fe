import { useEffect, useState } from "react"
import EmailSummary from "../EmailSummary"
import NavLinks from "../NavLinks"
import SearchBar from "../SearchBar"

function InboxSummary () {
    const [emails, setEmails] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value)
        }

    function getEmails() {
            fetch(`https://email-client-api.dev.io-academy.uk/emails?search=${searchTerm}`)
                .then(res => res.json())
                .then(data => {
                    setEmails(data.data)
                   
                })
        }

    useEffect(getEmails, [searchTerm])

    return (
        <div className="lg:flex lg:justify-end">
            <div className="hidden lg:block">
                <NavLinks />
            </div>
            <div className="lg:w-5/6">
                <SearchBar searchTerm={searchTerm} handleInputChange={handleInputChange}/>
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

export default InboxSummary