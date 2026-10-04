function diffObjects(oldObj, newObj) {
const report = {
    added: {},
    removed: {},
    changed: {}
};
for (const key of Object.keys (oldObj)) {
    if (!(key in newObj)) {
        report.removed[key] = oldObj[key];
    
    } else if (oldObj[key] !== newObj[key]) {
        report.changed[key] = { from: oldObj[key], to: newObj[key] };
    }
}
for (const key of Object.keys(newObj)) {

    if(!(key in oldObj)) {
        report.added[key] = newObj[key];
    }
}
return report;
}

console.log(diffObjects(
  { name: 'Setemi', role: 'Engineer', country: 'Jamaica' },
  { name: 'Setemi', role: 'Senior Engineer', city: 'Kingston' }
))
