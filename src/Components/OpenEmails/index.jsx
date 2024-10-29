import { useEffect, useState } from "react"

function OpenEmails (){

    const [emails, setEmails] = useState ([])
useEffect (() => {
    fetch('https://email-client-api.dev.io-academy.uk/emails?search=example search term')
  .then(res => res.json())
  .then(data => {
    console.log(data.emails)


  })
})
return (
    <div>

    </div>
)

}
export default OpenEmails
