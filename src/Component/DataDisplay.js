import React, { Component } from 'react'

 class DataDisplay extends Component {

  constructor(props)
  {
    super(props)
    
      this.state={
        items:[],
        isLoaded:false,
        
    }
  }

  componentDidMount()
  {
    fetch('http://jsonplaceholder.typicode.com/posts?')
    .then((res)=> res.json())
    .then((json)=> {
      this.setState(
        {
          isLoaded:true,
          items:json,
        }
      )
    })

  }

  render() {
    var {isLoaded, items}=this.state
    

        if(!isLoaded)
        {
          return <div>Loading....</div>
        }
        else{
          return ( 
          <div className="values">
            <ul>

              <div>{items[0].title}</div>

             {/*{items.map((item)=>{
                 return <li> {item.userId} </li>
              })}*/}


              </ul>
              </div> 
         )
        }
  }
}

export default DataDisplay