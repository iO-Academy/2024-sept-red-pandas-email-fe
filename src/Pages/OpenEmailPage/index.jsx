import { BrowserRouter, Route, Routes } from "react-router-dom"
import OpenEmails from "../../Components/OpenEmails"
import { useEffect } from "react"


function OpenEmailPage(){

        // const {id} = useParams()
        
        //     useEffect (() => {
        //     fetch(`https://email-client-api.dev.io-academy.uk/emails/${id}`)
        //     .then(res => res.json())
        //     .then(data => {
        //     //   setEmails(data.data)
        //     console.log(data)
        // })
        // },[]) 

    return(
        <BrowserRouter>
            <Router>
                <Routes>
                    <Route path="/emails/:id" element={<OpenEmails />} />
                </Routes>
            </Router>
        </BrowserRouter>
    )
}
export default OpenEmailPage