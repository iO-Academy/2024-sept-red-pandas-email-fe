function SearchBar ({searchTerm, handleInputChange}) 
{
return (
<form className="pt-2 m-4">
            <label htmlFor="searchBar"></label>
            <input className="border-4 w-full placeholder-slate-600 font-bold p-2" 
            type="text" 
            placeholder="Search" 
            id="searchBar" 
            name="SearchBar"  
            value={searchTerm}
            onChange={handleInputChange}/>
            </form>
    )
}

export default SearchBar