// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  return cats.push(name);
}
destructivelyAppendCat(Ralph);

function destructivelyPrependCat(name) {
  return cats.unshift(name);
}
destructivelyPrependCat(Bob);

function destructivelyRemoveLastCat() {
  return cats.pop();
}

console.log(destructivelyRemoveLastCat);

function destructivelyRemoveFirstCat() {
  return cats.shift();
}

console.log(destructivelyRemoveFirstCat);

function appendCat(name) {
  let newCats;
  return (newCats = [...cats, name]);
}

appendCat(Broom);

function prependCat(name) {
  let newCats;
  return (newCats = [name, ...cats]);
}

prependCat(Arnold);

function removeLastCat() {
  return cats.slice(0, -1);
}

console.log(removeLastCat);

function removeFirstCat() {
  return cats.slice(1);
}
