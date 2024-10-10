import React from 'react'


function SearchBar({filterText, onFilterTextOnlyChange}) {
  return (
    <form>
        <input type="text" value={filterText} placeholder="Search..." onChange={(e)=>onFilterTextOnlyChange(e.target.value)}></input>
    </form>
  )
}

export default SearchBar