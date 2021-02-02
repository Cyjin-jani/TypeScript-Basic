//reduce에 대하여.

var heroes = [{name: 'capt', age: 100}, {name: 'thor', age: 1000}]

var totalAge = heroes.reduce((total, currentItem) => {
  total = total + currentItem.age;
  return total;
}, 0);

console.log(totalAge);
