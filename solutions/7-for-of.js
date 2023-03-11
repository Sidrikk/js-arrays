// BEGIN
const calculateAverage = (array) => {
    if (array.length == 0) {
        return null;
    }
    let sum = 0;
    let count = 0;
    for (let item of array) {
        sum += item;
        count += 1;
    }
    return sum / count;
}
export default calculateAverage;
// END