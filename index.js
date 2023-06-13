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
//console.log(person);

//square bracket notation
const items = {
  "featured-items": ["item1", "item2"],
};

//console.log(items["featured-items"]);

//console.log(person["name"]);

//Setting Keys dynamically
let appState = "loading";
appState = "error";
const app = {
  [appState]: true,
};

//console.log(app);

//adding properties
let keyName = "computer";
app[keyName] = "apple";

//console.log(app);
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
//console.log(state);

//Adding a value for the job property
updateState("job", "computer engineer");
//console.log(state);

//Updating properties values
updateState("loading", false);
//console.log(state);

//adding new keys
updateState("products", ["apples", "banana"]);
//console.log(state);

//Part 2 - Unique values

console.log("unique values");
const menu = [
  {
    name: "pancakes",
    category: "breakfast",
  },
  {
    name: "burger",
    category: "lunch",
  },
  {
    name: "steak",
    category: "dinner",
  },
  {
    name: "bacon",
    category: "breakfast",
  },
  {
    name: "eggs",
    category: "breakfast",
  },
  {
    name: "pasta",
    category: "dinner",
  },
];

//Iterate over all the categories
const categories = menu.map((item) => item.category);
console.log(categories);

//Unique categories
const newCategories = new Set(categories);
console.log(newCategories); //result in an object format

//Unique values in an array format
const uniqueCategory = [...new Set(categories)];
console.log(uniqueCategory);
