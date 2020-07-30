import {SET_COLOR, SET_GRID_SIZE, SET_INTERVAL, SET_VIEWING_ARRAY, SET_IS_RUNNING, SET_COUNT, SET_TYPE_CLICK} from '../actions'

const initialState = {
    color: '#000000',
    gridSize: 25,
    interval: 700,
    viewingArray: Array(625).fill({isAlive: false}),
    isRunning: false,
    count: 0,
    typeClick: 'cell'
}

export const appReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_COLOR:
            return{
                ...state,
                color: action.payload
            }
        case SET_GRID_SIZE:
            return{
                ...state,
                gridSize: action.payload
            }
        case SET_INTERVAL:
            return{
                ...state,
                interval: action.payload
            }
        case SET_VIEWING_ARRAY:
            return{
                ...state,
                viewingArray: action.payload
            }
        case SET_IS_RUNNING:
            return{
                ...state,
                isRunning: action.payload
            }
        case SET_COUNT:
            return{
                ...state,
                count: action.payload
            }
        case SET_TYPE_CLICK:
            return{
                ...state,
                typeClick: action.payload
            }
        default:
            return state
    }
}