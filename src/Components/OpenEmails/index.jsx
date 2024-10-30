import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CloseEmailButton from "../CloseEmailButton"

function OpenEmails(){
    const { id } = useParams()
    const [emailId, setEmailId] = useState ("")
    const [emailSubject, setEmailSubject] = useState ("")
    const [emailBody, setEmailBody] = useState ("")
    const [emailFrom, setEmailFrom] = useState ("")
    const [emailFromName, setEmailFromName] = useState ("")
    const [emailDate, setEmailDate] = useState ("")

    useEffect (() => {
        fetch(`https://email-client-api.dev.io-academy.uk/emails/${id}`)
        .then(res => res.json())
        .then(data => {
            const email = data.data.email
            setEmailId(email.id)
            setEmailSubject(email.subject)
            setEmailBody(email.body)
            setEmailFrom(email.email)
            setEmailFromName(email.name)
            setEmailDate(email.date_created)
        })
    }, [id])

    return (
        <main className="my-6 border-y-4 border-slate-100 px-6">
            <div> <CloseEmailButton /> </div>
            <div className="pt-5 font-bold 
            flex flex-row justify-between">
                <h4>{emailFromName}</h4>
                <p>{emailDate}</p>
            </div>
            <h5 className="py-2 font-bold">{emailFrom}</h5>
            <h3 className="text-2xl font-semibold">{emailSubject}</h3>
            <p className="mb-4 pt-10 flex flex-row justify-start">{emailBody}</p>
        </main>
    )
}
export default OpenEmails
