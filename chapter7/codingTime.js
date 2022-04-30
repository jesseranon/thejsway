//Musketeers

const musketeers = ['Athos', 'Porthos', 'Aramis'];

for (let i = 0; i < musketeers.length; i++) {
    console.log(musketeers[i]);
}

musketeers.push('D\'Artagnan');

musketeers.splice(musketeers.indexOf('Aramis'), 1);

for (let musketeer of musketeers) {
    console.log(musketeer);
}

//Sum of values

const values = [3, 11, 7, 2, 9, 10];

const sumOfValues = values.reduce((total, value) => total + value, 0);

console.log(sumOfValues);

//Array maximum
let maxValue = 0;
for (let i = 0; i < values.length; i++) {
    if (values[i] > maxValue) maxValue = values[i];
}

console.log(maxValue);

console.log(Math.max(...values));

//List of words
let userResponse = prompt('type in a word.');
let userResponses = [];

while (userResponse.toLowerCase() !== 'stop') {
    if (userResponse.length) userResponses.push(userResponse);
    userResponse = prompt('type in a word.');
}