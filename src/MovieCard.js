import React from 'react'


const MovieCard = ({movie}) => {
  return (
    <div className='movie' style={{backgroundImage: `url(${movie.posterUrl})`}}>
        <h2 className='movie__title'>{movie.title}</h2>
        <span className='movie__description'>{movie.description}</span>
        <div className="movie__rating">
            <i class="fa-solid fa-star" style={{color: "#FFD43B"}}>{movie.rating}</i>
        </div>
        
    </div>
  )
}

export default MovieCard