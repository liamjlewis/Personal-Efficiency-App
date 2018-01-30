export function pushToArray(array, pushItem) {
    let newArray = array.slice();
    newArray.splice(newArray.length, 0, pushItem);
    return newArray;
}

export function removeFromArray(array, index) {
    let newArray = array.slice();
    newArray.splice(index, 1);
    return newArray;
}
