import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Header from "./Components/Header"
import NewEmail from "./Pages/NewEmail/Index"

function App () {
    return (
        <div>
            
           <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/email" element={<NewEmail />} />
                    {/* <Route path="/sent" element={<SentEmail />} />
                    <Route path="/deleted" element={<DeletedEmail />} /> */}
                </Routes>
           </BrowserRouter>
        </div>
    )
}

export default App