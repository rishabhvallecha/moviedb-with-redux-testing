import MOVIE from '../constants';

const errorReducer = (state = null, action) => {
    switch (action.type) {
        case MOVIE.LOAD_FAILURE: {
            return action.error;
        }
        case MOVIE.LOAD_REQUEST: {
            return null;
        }
        case MOVIE.LOAD_SUCCESS: {
            return null
        }
        default:
            return state
    }
}

export default errorReducer;