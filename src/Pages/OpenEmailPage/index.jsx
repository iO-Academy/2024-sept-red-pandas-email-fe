import { BrowserRouter, Route, Routes, Router } from "react-router-dom"
import OpenEmails from "../../Components/OpenEmails"
import { useEffect } from "react"


function OpenEmailPage(){

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