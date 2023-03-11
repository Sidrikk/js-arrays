// BEGIN
export const getMax = (arr) => {
    if (arr.length == 0) return null;
    let maximum = arr[0];
    for (let item of arr) {
        if (item >= maximum) {
            maximum = item;
        }
    }
    return maximum;
}
// END