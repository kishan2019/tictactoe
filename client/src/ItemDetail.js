import React, { Component } from 'react'

export class ItemDetail extends Component {
    state = {
        data: []
    } 

    componentDidMount(){
        fetch(
            `http://localhost:5000/api`, {
              method: "get",
              headers: {
                'Content-Type': 'application/json'
            }
            })
            .then(res => res.json())
            .then(data => this.setState({ 
                    data: [...data]
            })
         )
    }

  render() {
    return (
     <div>
      {this.state.data.map((element,index) => {
        return(
           <div className="table" key={index}>
           <div>Winner : {element.name}</div>
           <div>Point : {element.point}</div>
           </div>
           )
        
    })}
    </div>
  )
}
}
