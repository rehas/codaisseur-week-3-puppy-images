import React from 'react'
import { Link } from 'react-router-dom'

export default function DogBreedImages (props) {
  return (
    <div className="dog-breed-images">
      <h1>Dogs Breed Images</h1>

      This page will show images of a specific dog breed.

      <h2> Which is {props.match.params.breed}</h2>

      <Link to="/">Go back to the index</Link>
    </div>
  )
}