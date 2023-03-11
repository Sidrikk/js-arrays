// BEGIN
export const get = (array, index, def = null) => {
    if (index >= 0 && index < array.length) {
        return array[index];
    } else {
        return def;
    }
}
// END