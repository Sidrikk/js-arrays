const _ = require("lodash"); 

// BEGIN
const getSameCount = (arr1, arr2) => {
    return Array.from(new Set(_.intersection(arr1, arr2))).length;
}

export default getSameCount;
// END