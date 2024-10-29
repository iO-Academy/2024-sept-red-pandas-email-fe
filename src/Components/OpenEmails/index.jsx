import { useEffect, useState } from "react"

function openEmails (){

    const [emails, setEmails] = useState ([])
useEffect (() => {
    fetch('https://email-client-api.dev.io-academy.uk/emails?search=example search term')
  .then(res => res.json())
  .then(data => {
    console.log(data.NewEmails)


  })
})
return (
    <div>

    </div>
)

}
export default openEmails