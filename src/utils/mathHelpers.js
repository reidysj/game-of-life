// These functions will replace some of the simple math logic in setCells
// the have been designated one-eight, with one representing the top-left neighbor, continuing clockwise to eight, representing the middle left neighbor
//
export const one = (j, n, currentArr) => {
    return currentArr[j-n-1].isAlive
}
export const two = (j, n, currentArr) => {
    return currentArr[j-n].isAlive
}
export const three = (j, n, currentArr) => {
    return currentArr[j-n+1].isAlive
}
export const four = (j, currentArr) => {
    return currentArr[j+1].isAlive
}
export const five = (j, n, currentArr) => {
    return currentArr[j+n+1].isAlive
}
export const six = (j, n, currentArr) => {
    return currentArr[j+n].isAlive
}
export const seven = (j, n, currentArr) => {
    return currentArr[j+n-1].isAlive
}
export const eight = (j, currentArr) => {
    return currentArr[j-1].isAlive
}