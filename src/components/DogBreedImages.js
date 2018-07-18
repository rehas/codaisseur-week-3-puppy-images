import React from 'react'
import { Link } from 'react-router-dom'

export default function DogBreedImages (props) {
  return (
    <div className="dog-breed-images">
      <h1>Dogs Breed Images</h1>

      This page will show images of a specific dog breed.

      <h2> Which is {props.match}</h2>

      {props.images && props.images.map((x)=> <img key={props.breed}  src = {x}/> )}
      {!props.images && "loading..."}

      <Link to="/">Go back to the index</Link>
    </div>
  )
}