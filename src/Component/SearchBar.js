import React from 'react'

function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}) {
  return (
        <div>
            <form>
               <input type="text" value={filterText} placeholder="Search..." onChange={(e)=>onFilterTextChange(e.target.value)}/><br></br>
             <label><input type="checkbox" checked={inStockOnly} onChange={(e) => onInStockOnlyChange(e.target.checked)} />Only show products in stock</label>
            </form>
        </div>
  )
}

export default SearchBar