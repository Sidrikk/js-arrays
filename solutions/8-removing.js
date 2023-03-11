// BEGIN
const getSameParity = (array) => {
    let parity = Math.abs(array[0]) % 2;
    let newArray = [];
    for (let item of array) {
        if (Math.abs(item % 2) === parity) {
            newArray.push(item);
        }
    }
    return newArray;
}
export default getSameParity;
// END