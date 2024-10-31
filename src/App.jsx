import { BrowserRouter, Route, Routes } from "react-router-dom"
import OpenEmails from "./Pages/OpenEmailPage"
import Header from "./Components/Header"
import InboxSummary from "./Components/InboxSummary"
import DeleteSummary from "./Pages/DeleteSummary"


function App () {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/emails/:id" element={<OpenEmails />} />                
                    <Route path="/" element={<InboxSummary/>} />
                    <Route path="/deleted" element={<DeleteSummary />} />
                </Routes>
           </BrowserRouter>
        </div>
    )
}
export default App