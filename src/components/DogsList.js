import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class DogsList extends PureComponent {
    static proptypes = {
        dogBreeds : PropTypes.array.isRequired,
    }

    renderDogBreed(breed){
        return (
            <li key={breed}>
                <Link to={ `/dog-breeds/${breed}`}>    {breed}</Link>
            </li>
            )
        }
    

    render(){
        const {dogBreeds} = this.props
        console.log(Date.now())
        console.log(dogBreeds)
        return (
            <div className="dogs-list">
                <h1>Dogs List</h1>
                {!dogBreeds && 'Loading...'}
                <ul>
                    {dogBreeds  && dogBreeds.map(this.renderDogBreed)}
                </ul>
            </div>
        )
    }
}

export default DogsList