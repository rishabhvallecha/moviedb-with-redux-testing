import MOVIE from '../constants'

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case MOVIE.LOAD_REQUEST: 
            return true
        case MOVIE.LOAD_SUCCESS: 
            return false
        case MOVIE.LOAD_FAILURE:
            return false
        case MOVIE.LOAD_STOP:
            return false
        default:
            return state
    }
}

export default loadingReducer