import {useNavigate, useParams } from "react-router-dom"

function DeleteButton({link, text}) {
    const { id } = useParams()

    const navigate = useNavigate()
    
    function handleClickDelete() {
        fetch(`https://email-client-api.dev.io-academy.uk/emails/${id}`, {method: 'DELETE'})
            .then(res => res.json())
            .then((data) => {
                navigate(link)
        })}

    return (
        <div>
            <button onClick={handleClickDelete} className="px-4 py-1.5 bg-red-600 text-white rounded hover:bg-gray-600">
                {text}
            </button>
        </div>
    )
}

export default DeleteButton