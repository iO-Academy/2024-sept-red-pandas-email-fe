import { useEffect, useState } from "react"
import EmailSummary from "../EmailSummary"
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
        <div>
            <SearchBar searchTerm={searchTerm} handleInputChange={handleInputChange}/>
            {emails.map(email => (
                <EmailSummary  
                    key={email.id}
                    id={email.id}
                    name={email.name}
                    subject={email.subject}
                    body={email.body}
                    date={email.date_created}
                    read={email.read}
                />
            ))} 
        </div>
    )
}

export default InboxSummary