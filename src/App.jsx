import { BrowserRouter, Route, Routes } from "react-router-dom"
import OpenEmails from "./Pages/OpenEmailPage"
import Header from "./Components/Header"
import InboxSummary from "./Components/InboxSummary"
// import SearchBar from "./Components/SearchBar"

function App () {
    return (
        <div>
            <BrowserRouter>
                <Header />
                {/* <SearchBar/> */}
                <Routes>
                    <Route path="/emails/:id" element={<OpenEmails />} />                
                    <Route path="/" element={<InboxSummary/>} />
                </Routes>
           </BrowserRouter>
        </div>
    )
}
export default App