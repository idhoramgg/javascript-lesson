let regex1 = new RegExp('Ridho');
console.log(regex1.test('Ridho')); // Output: true
console.log(regex1.test('Ridh0')); // Output: false

let regex2 = /Ridho/;
console.log(regex2.test('Ridho')); // Output: true
console.log(regex2.test('Ridh0')); // Output: false


