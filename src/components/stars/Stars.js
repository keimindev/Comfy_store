
import React from 'react'
import { Star, StarHalf, StarBorder } from '@material-ui/icons'
import './stars.css'


const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <Star />
        ) : stars >= number ? (
          <StarHalf />
        ) : (
          <StarBorder />
        )}
      </span>
    )
  })

  return (
    <div className="stars-container">
      <div className='stars'>{tempStars}</div>
      <p className='reviews'>({reviews} customer reviews)</p>
    </div>
  )
}

export default Stars