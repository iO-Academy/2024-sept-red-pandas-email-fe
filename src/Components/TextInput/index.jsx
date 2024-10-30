function TextInput ({placeholder, value, onChange}) {
    return (
        <input type="text"  required className="w-96 p-1.5 border border-gray-300 rounded 
        focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-500"> 
        {value}
        {placeholder}
        {onChange}
        </input>
    ) 
}

export default TextInput