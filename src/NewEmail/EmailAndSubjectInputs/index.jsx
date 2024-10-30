function EmailAndSubjectInputs () {
    return (
        <div>
            <label>
            <input
                        placeholder="To"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-96 p-1.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-500"/>
            </label>
            <label>  
            <input
                        placeholder="Subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        className="w-96 p-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-500"/>
            </label>                  
        </div>
    )
}

export default EmailAndSubjectInputs