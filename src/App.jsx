import { BrowserRouter, Route, Routes } from "react-router-dom"
import OpenEmails from "./Components/OpenEmails"

function App () {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/emails/:id" element={<OpenEmails />} />
                </Routes>
            </BrowserRouter>    
        </div>
    )
}
export default App