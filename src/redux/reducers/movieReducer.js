import MOVIE from '../constants';

const movieReducer = (state = [], action) => {
    if (action.type === MOVIE.LOAD_SUCCESS) {
        return [...action.movie]
    }

    return state;
}

export default movieReducer;