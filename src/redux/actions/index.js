export const SET_COLOR = 'SET_COLOR'
export const SET_GRID_SIZE = 'SET_GRID_SIZE'
export const SET_INTERVAL = 'SET_INTERVAL'
export const SET_VIEWING_ARRAY = 'SET_VIEWING_ARRAY'
export const SET_IS_RUNNING = 'SET_IS_RUNNING'
export const SET_COUNT = 'SET_COUNT'
export const SET_TYPE_CLICK = 'SET_TYPE_CLICK'

export const setColor = (color) => dispatch => {
    dispatch({type: SET_COLOR, payload: color})
}

export const setGridSize = (gridSize) => dispatch => {
    dispatch({type: SET_GRID_SIZE, payload: gridSize})
}

export const setNewInterval = (interval) => dispatch => {
    dispatch({type: SET_INTERVAL, payload: interval})
}

export const setViewingArray = (viewingArray) => dispatch => {
    dispatch({type: SET_VIEWING_ARRAY, payload: viewingArray})
}

export const setIsRunning = (bool) => dispatch => {
    dispatch({type: SET_IS_RUNNING, payload: bool})
}

export const setCount = (count) => dispatch => {
    dispatch({type: SET_COUNT, payload: count})
}

export const setTypeClick = (type) => dispatch => {
    dispatch({type: SET_TYPE_CLICK, payload: type})
}

