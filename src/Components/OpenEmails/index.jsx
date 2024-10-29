import { useEffect, useState } from "react"
import OpenEmail from "../OpenEmail" 

function OpenEmails(){

    const [emails, setEmails] = useState ([])

    useEffect (() => {
    fetch('https://email-client-api.dev.io-academy.uk/emails')
    .then(res => res.json())
    .then(data => {
      setEmails(data.data)
  })
},[])

return (
    <div>
        <h2>Email List</h2>
        <ul>
            {emails.map((email) => (
                <li key={email.id}>
                    <h3>From: {email.email}</h3>
                    <p>ID: {email.id}</p>
                    <p>Subject: {email.subject}</p>
                    <p>{email.body}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default OpenEmails
