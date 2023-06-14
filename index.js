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

//console.log("unique values");
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
//console.log(categories);

//Unique categories
const newCategories = new Set(categories);
//console.log(newCategories); //result in an object format

//Unique values in an array format
const uniqueCategory = [...new Set(categories)];
//console.log(uniqueCategory);

const resultEl = document.querySelector(".result");
//console.log(resultEl);
resultEl.innerHTML = uniqueCategory
  .map((category) => {
    return `<button>${category}</button>`;
  })
  .join("");

//Part 3 - Map Method
//It returns an array
//Doesn't alter the values of the original array
const people = [
  {
    name: "bob",
    age: 20,
    position: "developer",
  },
  {
    name: "anna",
    age: 25,
    position: "designer",
  },
  {
    name: "susy",
    age: 30,
    position: "the boss",
  },
  {
    name: "mike",
    age: 39,
    position: "politician",
  },
];

const ages = people.map((person) => person.age);
console.log(ages);

//Create the function separately

const getPosition = (position) => position.position;
const positions = people.map(getPosition);
console.log(positions);

//returning an object
const newPeople = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  };
});

console.log(newPeople);

//Wrap the data in HTML
const mapElement = document.getElementById("map-method");
const names = people.map((person) => `<h1>${person.name}</h1>`);
mapElement.innerHTML = names.join("");
