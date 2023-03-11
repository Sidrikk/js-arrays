// BEGIN
const getTotalAmount = (array, currency) => {
    let res = 0;
    for (let item of array) {
        if (item.split(' ')[0] == currency) {
            res += +item.split(' ')[1];
        }
    }
    return res;
}
export default getTotalAmount;
// END