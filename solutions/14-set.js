// BEGIN
const countUniqChars = (string) => {

    return Array.from(new Set(string.split(''))).length;
}

export default countUniqChars;
// END