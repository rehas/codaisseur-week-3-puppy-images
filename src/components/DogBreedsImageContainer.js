import React, {PureComponent} from 'react'
import request from 'superagent'
import DogBreedImages from './DogBreedImages'

export default class DogsListContainer extends PureComponent {
    state = { images: null }

    componentDidMount(){
        const breed  = this.props.match.params.breed

        console.log(breed)

        const url = `https://dog.ceo/api/breed/${breed}/images`

        console.log('url is ', url)

        request
            .get(url)
            .then(response => this.updateImages( response.body.message))
            .catch(console.error)
    }

    updateImages(images){
        this.setState({
            images : images
        })
    }

    render(){
        return <DogBreedImages images = {this.state.images}/>
    }
}  

