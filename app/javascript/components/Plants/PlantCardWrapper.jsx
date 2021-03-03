import React from 'react'
import PlantCard from './Plantcard'
import {Link} from 'react-router-dom'


class PlantCardWrapper extends React.Component{
    render(){
        return(
            <div className="PlantCardWrapper grid grid-cols-4">
            {this.props.plants.map((plant) => (
          <Link to={`/plants/${plant.id}`}>
          <PlantCard plant={plant}/>
                </Link>
              ))}
              </div>
        )
    }
}

export default PlantCardWrapper