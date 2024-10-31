import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import EmailSummary from "../EmailSummary"

function DeleteButton({link, text, handleClickDelete}) {
  
    const { id } = useParams()
    const [deleteEmail, setDeleteEmail] = useState("")

    function handleClickDelete() {
        fetch(`https://email-client-api.dev.io-academy.uk/emails/${id}`), 
        {method: 'DELETE'}
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDeleteEmail(<EmailSummary />)
        })}

    useEffect(handleClickDelete, [])

    return (
        <div className="pt-16">
            {/* {emails.map(email => {
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
                })} */}
            <Link onClick={handleClickDelete} to={link} className="px-4 py-1.5 bg-red-600 text-white rounded hover:bg-gray-600">
            {text}
            </Link>
        </div>
    )
}

export default DeleteButton