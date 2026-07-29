import * as imports from "./module-export.js";

import person3, { person1, person2, add, age } from "./module-export.js";

import personDefault from "./module-export-default.js";

console.log(
  imports.add,
  imports.person1,
  imports.person2,
  imports.person3,
  imports.age,
  imports.add,
);

console.log();

console.log(person3);

const total = add(5, 5);

console.log(total);

console.log();

console.log(personDefault);
