// import { useEffect, useState } from "react"

// function SearchBar ({}) {
//     const [searchTerm, setSearchTerm] = useState("")
//     const handleInputChange = (event) => {
//         setSearchTerm(event.target.value)
//     }

//    useEffect(() => {
//         if (searchTerm) {
//             fetch(`https://email-client-api.dev.io-academy.uk/emails?search=${searchTerm}`)
//                 .then(res => res.json())
//                 .then(data => {
//                     setResults(data)
                   
//                 })
//         }
//     }, [searchTerm])
    
//     // return (
//     //     <form className="pt-2 m-4">
//     //     <label htmlFor="searchBar"></label>
//     //     <input className="border-4 w-full placeholder-slate-600 font-bold p-2" 
//     //     type="text" 
//     //     placeholder="Search" 
//     //     id="searchBar" 
//     //     name="SearchBar"  
//     //     value={searchTerm}
//     //     onChange={handleInputChange}/>
//     //     </form>
//     // )
// }

// export default SearchBar