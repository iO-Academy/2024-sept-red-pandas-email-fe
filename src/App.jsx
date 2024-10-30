import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import InboxSummary from "./Components/InboxSummary"

function App () {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<InboxSummary/>} />
                </Routes>
           </BrowserRouter>
        </div>
    )
}

export default App