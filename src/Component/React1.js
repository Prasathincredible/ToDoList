import React from 'react'

function React1() {

    const Move={
        display:"flex",
        float:"right",
        listStyleType:"none",
    }

    const link={
        textDecoration:"none",
        margin:"10px",
        fontFamily:"verdana",
        color:"white"
    }

    const header={
        width:"100%",
        height:"70px",
        backgroundColor:"blue"
    }

    

  return (
    <div>
        <header style={header}>
            <nav>
                <ul style={Move}>
                    <li><a style={link} href="#Home">Home</a></li>
                    <li><a style={link} href="#Services">Services</a></li>
                    <li><a style={link} href="#About">About</a></li>
                    <li><a style={link} href="#Contact">Contact</a></li>
                </ul>
            </nav>
        </header>


    </div>
  )
}

export default React1