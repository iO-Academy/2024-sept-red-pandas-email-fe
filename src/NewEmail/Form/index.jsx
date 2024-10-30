// Note for the next TEAM:1. For function's you have console.log() to see in console what is happening
// Note for the next TEAM:2. In this Form component you will find The Form and the Buttons
// Note for the next TEAM:3. You will find comments before Function for what are they and so on
import {useState} from "react"
import TextInput from "../../Components/TextInput"

function Form() {
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [textArea, setTextArea] = useState("")
    const [send, setSend] = useState(false)
    const [cancel, setCancel] = useState(false)
    const [error, setError] = useState(false)

    // Function for cancel button ->
    const handleCancel = () => {
        setEmail("")
        setSubject("")
        setTextArea("")
        setCancel(true)
        setSend(false)
    }

    // Function for Send button ->
    const handleSend = (e) => {
        e.preventDefault ()
        if (email.trim() && subject.trim() && textArea.trim()) {
            setSend(true)
            setCancel(false)

            // Data sending to API
            fetch("https://email-client-api.dev.io-academy.uk/emails", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    subject: subject,
                    body: textArea,
                    name: "MrBloggs",
                })
            })
                .then((response) => response.json())
                .then((data) => {
                    setSend(true) // confirmation for sent data
                    setError(false)
                })
                .catch(() => {
                    setSend(false)
                })
        } else {
            setError(true)
        }
    }

    return (
        <div className=" text-black p-10">
            <form onSubmit={handleSend} className="flex flex-col space-y-4 gap-3 ml-3">
            <label>
                <div>
                <TextInput 
                        placeholder="To"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                </div>
                    
                </label>
                <label>
                    <div>
                        <TextInput 
                            placeholder="Subject"
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}/>    
                    </div>  
                </label>
                <label>
                    <textarea
                        name="postContent"
                        placeholder="Text"
                        value={textArea}
                        rows={20}
                        onChange={(e) => setTextArea(e.target.value)}
                        required
                        className="p-1.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-500 w-full"/>
                </label>
                <div className="flex justify-end space-x-2 mt-2">
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="px-4 py-1.5 bg-gray-500 text-white rounded hover:bg-gray-600">
                        Cancel
                    </button>
                    <input
                        type="submit"
                        value={"Send"}
                        className="px-4 py-1.5 bg-green-500 text-white rounded hover:bg-green-700" />
                </div>
            </form>
            {/* Messages after pressing the Buttons */}
            {send && <p className="mt-4 text-green-600">Message sent!</p>}
            {cancel && <p className="mt-4 text-red-600">Form canceled</p>}
            {error && <p className="mt-4 text-red-600">All fields are required</p>}
        </div>
    )
}

export default Form