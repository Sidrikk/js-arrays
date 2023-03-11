// BEGIN
export const swap = (items) => {
    if (items.length < 2) {
        return items;
    } else if (items.length == 2) {
        return items.reverse();
    } else {
        let first = items[0];
        let last = items[items.length - 1];
        return [last, ...items.slice(1, items.length-1), first];
    }
};

// END