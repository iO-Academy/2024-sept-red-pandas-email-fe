import { useEffect, useState } from "react"
import EmailSummary from "../EmailSummary"

function InboxSummary () {
    const [emails, setEmails] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value)
        }

    function getEmails() {
        fetch('https://email-client-api.dev.io-academy.uk/emails')
        .then(res => res.json())
        .then(data => {
            setEmails(data.data)
        })
    }

    useEffect(getEmails, [])

    const filteredEmails = emails.filter(email =>
        email.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        email.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        email.body.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <form className="pt-2 m-4">
            <label htmlFor="searchBar"></label>
            <input className="border-4 w-full placeholder-slate-600 font-bold p-2" 
            type="text" 
            placeholder="Search" 
            id="searchBar" 
            name="SearchBar"  
            value={searchTerm}
            onChange={handleInputChange}/>
            </form>
        

            
            {filteredEmails.map(email => (
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