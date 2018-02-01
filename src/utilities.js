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

export function suffixTolistName(suffix) {
	switch (suffix){
		case "":
			return "todos"
		case "_THE_LATERBASE":
			return "theLaterbase"
		case "_POST_PROCRASTINATION":
			return "postProcrastination"
	}
}

export function listNameToSuffix(listName) {
	switch(listName) {
    case "todos":
      return ""
    case "theLaterbase":
      return "_THE_LATERBASE"
    case "postProcrastination":
      return "_POST_PROCRASTINATION"
  }
}