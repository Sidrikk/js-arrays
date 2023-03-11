// BEGIN
const addPrefix = (names, pref) => {
    let newNames = [];
    for (let item of names) {
        let newName = pref + ' ' + item;
        newNames.push(newName);
    }
    return newNames;
}
export default addPrefix;
// END