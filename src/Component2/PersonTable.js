import React from 'react'
import PersonRow from './PersonRow'

function PersonTable({persons, filterText}) {

    const rows=[]
    
    
    persons.forEach((person)=>{

 
        if(person.name.toLowerCase().indexOf(filterText.toLowerCase())===-1)
            {
                console.log(person.name.toLowerCase().indexOf(filterText.toLowerCase()))
                return;
            }
                
        rows.push(
            <PersonRow person={person} key={person.name}></PersonRow>
            )
    })
   

  return (

    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Category</th>
            </tr>
        </thead>

        <tbody>{rows}</tbody>
    </table>
    
  )
}

export default PersonTable