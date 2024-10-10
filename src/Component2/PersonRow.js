import React from 'react'

function PersonRow({person}) {
  return (
    <tr>
        <td>{person.name}</td>
        <td>{person.category}</td>
    </tr>
  )
}

export default PersonRow