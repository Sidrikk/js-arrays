// BEGIN
const getSuperSeriesWinner = (scores) => {
    let canada = 0;
    let ussr = 0;
    for (let item of scores) {
        if (item[0] > item[1]) {
            canada += 1;
        } else if (item[0] < item[1]) {
            ussr += 1;
        }
    }
    if (canada > ussr) {
        return 'canada';
    } else if (canada < ussr) {
        return 'ussr';
    } else {
        return null;
    }
}
export default getSuperSeriesWinner;
// END