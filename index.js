//Dynamic Object Keys

//Normal object
const person = {
  name: "John",
};

//Retrieving name property
console.log(person.name); // John

//Adding a new property
person.age = 23;

//Checking for all properties
console.log(person);

//square bracket notation
const items = {
  "featured-items": ["item1", "item2"],
};

console.log(items["featured-items"]);

console.log(person["name"]);

//Setting Keys dynamically
let appState = "loading";
appState = "error";
const app = {
  [appState]: true,
};

console.log(app);

//adding properties
let keyName = "computer";
app[keyName] = "apple";

console.log(app);
