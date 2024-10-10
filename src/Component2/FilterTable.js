import React from 'react'
import SearchBar from './SearchBar'
import PersonTable from './PersonTable'
import { useState } from 'react'

function FilterTable({persons}) {

    const [filterText, setFilterText]=useState('')



  return (

    <div>

        <SearchBar filterText={filterText} onFilterTextOnlyChange={setFilterText}></SearchBar>
        <PersonTable persons={persons} filterText={filterText} ></PersonTable>

    </div>

  ) 
}

export default FilterTable