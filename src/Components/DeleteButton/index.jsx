import { Link, useParams } from "react-router-dom"

function DeleteButton({link, text}) {
    const { id } = useParams()
    
    function handleClickDelete() {
        fetch(`https://email-client-api.dev.io-academy.uk/emails/${id}`, 
        {method: 'DELETE'})
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                
        })}

    return (
        <div>
           
            <Link onClick={handleClickDelete} to={link} className="px-4 py-1.5 bg-red-600 text-white rounded hover:bg-gray-600">
                {text}
            </Link>
        </div>
    )
}

export default DeleteButton