function EmailSummary ({name, subject, body, date}) {
    return (
        <div className="p-4 border-b border-gray-400 border-solid flex justify-between h-25">
            <div>
                <h4 className="text-lg font-bold ">{name}</h4>
                <p className="font-normal">{subject}</p>
                <p>{body.slice(0, 22) + "..."}</p>
            </div>
            <div className="text-right w-40 font-bold">
                <p>{date.split(" ")[0]}</p>
            </div>
        </div>
    )
}

export default EmailSummary