// BEGIN
const makeCensored = (string, array) => {
    let res = [];
    for (let word of string.split(' ')) {
        // for (let item of array) {
        //     if (word == item) {
        //         res.push('$#%!');
        //     } else{
        //          res.push(word);
        //     }
        // }
        array.indexOf(word) != -1 ? res.push('$#%!') : res.push(word);
    }
    return res.join(' ');
}

export default makeCensored;
// END