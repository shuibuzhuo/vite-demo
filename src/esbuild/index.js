const cloneDeep = require("lodash.clonedeep");
import cloneDeep2 from "lodash.clonedeep";

console.log("hello esbuild");
console.log(cloneDeep({ a: 1 }));
console.log(cloneDeep2({ a: 1 }));
console.log(cloneDeep === cloneDeep2);
