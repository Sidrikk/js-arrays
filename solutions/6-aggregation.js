// BEGIN
export const calculateSum = (array) => {
    let res = 0;
    for (let item of array) {
        if (item % 3 == 0) {
            res += item;
        }
    }
    return res;
}
// END