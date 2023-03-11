const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
};

// BEGIN
export const getTheNearestLocation = (loc, point) => {
    if (loc.length == 0) return null;
    let res = Infinity;
    let resCoord;
    let resLoc = '';
    for (let item of loc) {
        let [name, coord] = item;
        if (getDistance(coord, point) <= res) {
            res = getDistance(coord, point);
            resCoord = coord;
            resLoc = name;
        }
    }
    return [resLoc, resCoord]
}
// END
