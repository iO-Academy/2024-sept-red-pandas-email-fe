function EmailSummary ({email, name, subject, body, date}) {


    return (
        <div>
            <h4>{name}</h4>
            <p>{subject}</p>
            <p>{body}</p>
            <p>{date}</p>
        </div>
    )
}







export default EmailSummary



// import { Link } from "react-router-dom";

// function SingleBook({id, title, author,image}) {

//     return (
//         <div>
         
//                 <Link to="/books/:id">
//                     <h4>{title}</h4>
//                     <p>{author}</p>
//                     <img src={image} alt="" />
//                 </Link>
//         </div>
//     )
// }

// export default SingleBook;