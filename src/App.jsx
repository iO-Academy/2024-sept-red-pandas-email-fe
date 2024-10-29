import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Header from "./Components/Header"
import Nav from "./Components/Nav"

function App () {
    return (
        <div>
            
           <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage/>} />
            
                </Routes>
           </BrowserRouter>
        </div>
    )
}

export default App