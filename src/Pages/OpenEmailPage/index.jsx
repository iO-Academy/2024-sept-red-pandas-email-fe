import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"

function OpenEmailPage(){

    const {id} = useParams()
    
        useEffect (() => {
        fetch(`https://email-client-api.dev.io-academy.uk/emails/${id}`)
        .then(res => res.json())
        .then(data => {
        //   setEmails(data.data)
        console.log(data)
      })
    },[]) 

    return(
        <div>
            <h1>Email {id}</h1>
        </div>
    )
}
export default OpenEmailPage