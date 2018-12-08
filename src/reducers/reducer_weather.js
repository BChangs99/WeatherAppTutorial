import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {

    switch(action.type) {
        case FETCH_WEATHER:
        //This return is flattened, it is not an array with arrays inside, its one array
            return [ action.payload.data, ...state ]
    }
    
    return state
}