// BEGIN
const buildDefinitionList = (items) => {
    if (items.length == 0 || items[0].length == 0) {
        return '';
    }
    let res = '<dl>';
    for (let item of items) {
        res += `<dt>${item[0]}</dt><dd>${item[1]}</dd>`
    }
    res += '</dl>'
    return res;
}

export default buildDefinitionList;
// END