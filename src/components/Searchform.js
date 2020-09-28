import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import 'semantic-ui-css/semantic.min.css'

import { loadMovie, setMovie, setError, stopLoading } from '../redux/actions'

import axios from 'axios';

const apiKey = '6bdadca3d1b9326a88bf6ed432cba4d0'

function Searchform(props) { 

    const [inputText, setInputText] = useState('Spiderman');
    const [query, setQuery] = useState('Spiderman');

    const {isLoading, error, loadMovie, setError, stopLoading, setMovie, movie} = props;

    function handleChange(event) {
        const {value} = event.target;
        setInputText(value);
    }

    useEffect( () => {
        const fetchMovie = async () => {
            loadMovie();
            try {
                const response = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}`)
                //const [movieNames] = response.data.results
                
                console.log(response.data.results)
                setMovie([...response.data.results]);
            }
            catch (error) {
                setError(error);
            }
            stopLoading()
        };

        fetchMovie();
    }, [loadMovie, query, setError, stopLoading, setMovie] )

    return (
        <div>
            <input type='text' value = {inputText} onChange = {handleChange}></input>
            <button onClick={() => setQuery(inputText)}>Search</button>

            {error && <div>Something went wrong</div>}
            {isLoading ? <div>Loading {inputText} </div> : 
            <div>
            <br></br>
            
            {/* <ul>
          {movie.map(movie => {
            const { id: movieID, original_title: movieTitle }= movie
            return (
              <li key={movieID}>
                {movieTitle}
              </li>
            )
          })}
        </ul> */}
          {/* <div className="ui cards">
                <div className="ui card">
                {movie.map(movie => {
                    const { id: movieId, original_title: movieTitle, overview: movieOverview, poster_path: imageURL }= movie
                    return (
                        
                            <div className="content"  key={movieId}>
                                <img src={`http://image.tmdb.org/t/p/w185${imageURL}`} className="ui mini right floated image" alt="Movie Poster"/>
                                <div className="header">{movieTitle}</div>
                                <div className="description">{movieOverview}</div>
                            </div>
                           
                    )
                })}
                </div>
            </div> */}
            <div className="ui cards">
                
                {movie.map(movie => {
                    const { id: movieId, original_title: movieTitle, overview: movieOverview, poster_path: imageURL }= movie
                    return (
                        <div>
                            <div className="ui card" key={movieId}>
                                <div className="image">
                                    <img src={`http://image.tmdb.org/t/p/w185${imageURL}`} alt="Movie Poster"/>
                                </div>
                            </div>
                            <div class="content">
                                <div class="header">{movieTitle}</div>
                                <div class="description">{movieOverview}</div>
                            </div>
                        </div>     
                    )
                })}
                    
                        
                </div>
            </div> 
            }
        </div>
    )
}

const mapStateToProps = ({ isLoading, movie, error }) => ({
    isLoading,
    movie,
    error
})

const mapDispatchToProps = dispatch => {
    return {
        loadMovie: () => dispatch(loadMovie()),
        setMovie: movie => dispatch(setMovie(movie)),
        setError: error => dispatch(setError(error)),
        stopLoading: () => dispatch(stopLoading())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchform);