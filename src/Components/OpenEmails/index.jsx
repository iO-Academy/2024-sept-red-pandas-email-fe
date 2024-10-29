import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function OpenEmails(){
    // const [emails, setEmails] = useState ([])
    const { id } = useParams()
    const [emailId, setEmailId] = useState ("")
    const [emailSubject, setEmailSubject] = useState ("")
    const [emailBody, setEmailBody] = useState ("")
    const [emailFrom, setEmailFrom] = useState ("")
    const [emailFromName, setEmailFromName] = useState ("")
    const [emailDate, setEmailDate] = useState ("")

    useEffect (() => {
    fetch('https://email-client-api.dev.io-academy.uk/emails')
    .then(res => res.json())
    .then(data => {
    //   
    const email = data.data
                setEmailId(email.id)
                setEmailSubject(email.subject)
                setEmailBody(email.body)
                setEmailFrom(email.email)
                setEmailFromName(email.name)
                setEmailDate(email.date_created)
            })
    }, [id])

    return (
        <div>
            <h4>From: {emailFromName}</h4>
            <p>Date: {emailDate}</p>
            <h5>Email: {emailFrom}</h5>
            <h3>Subject: {emailSubject}</h3>
            <p>{emailBody}</p>
        </div>
    )
}

export default OpenEmails
