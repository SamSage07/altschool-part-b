function deepEqual(objA, objB) {
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (const key of keysA) {
        const valA = objA[key];
        const valB = objB[key];

        if (typeof valA === "object" && valA !== null && typeof valB === "object" && valB!== null) {
            if(!deepEqual(valA, valB)) {
                return false;
            }
        } else {
            if (valA !== valB) {
                return false;
            }
        }
    }
    return true;
}

   console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true
   console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })); // false
   console.log(deepEqual({ a: 1 }, { a: 1, b: 2 }));                    // false