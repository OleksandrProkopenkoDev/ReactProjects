const nums = [1, 2, 3, 4, 5];
console.log(nums);

const squared = nums.map((num) => {
  return num * num;
});
console.log(squared);

const squared2 = nums.map(squareNum);
function squareNum(value, index, array) {
  return value * value;
}
console.log(squared2);

//---------------------------2
const names = ["alice", "bob", "charlie", "danielle"];
// first letters to upper case
const uppercase = names.map((name) => {
  return name[0].toUpperCase() + name.slice(1);
});
console.log(uppercase);

//----------3------------
const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
// ->           ["<p>Bulbasaur"</p>, "<p>Charmander</p>", "<p>Squirtle</p>"]
const addTag = pokemon.map((item) => {
  return `<p>${item}</p>`;
  //return "<p>" + item + "</p>";
});
console.log(addTag);
