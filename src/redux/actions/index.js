import MOVIES from '../constants';

const loadMovie = () => {
    return {
        type: MOVIES.LOAD_REQUEST
    }
}

const stopLoading = () => {
    return {
        type: MOVIES.LOAD_STOP
    }
}

const setMovie = movie => {
    return {
        type: MOVIES.LOAD_SUCCESS,
        movie
    }
}

const setError = error => {
    return {
        type: MOVIES.LOAD_FAILURE,
        error
    }
}

export {
    loadMovie,
    setMovie,
    setError,
    stopLoading
}