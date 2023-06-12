// Part 1: Dynamic Object Keys

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
//note that the property takes the value of the defined property

//Example
const state = {
  loading: true,
  name: "",
  job: "",
};

function updateState(key, value) {
  state[key] = value;
}

//adding a value for the name property
updateState("name", "john");
console.log(state);

//Adding a value for the job property
updateState("job", "computer engineer");
console.log(state);

//Updating properties values
updateState("loading", false);
console.log(state);

//adding new keys
updateState("products", ["apples", "banana"]);
console.log(state);
