"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// when hitesh is user
var hitesh = {
    name: "vai",
    id: 12,
};
// now, hitesh is admin so it will use "userName" and "age" and not "name" and "id" 
// so it's acceptable and can be done by using 'union'
var hiteshAdm = {
    userName: "Admin Bhai",
    age: 156,
};
// UNION IN CASE OF FUNCTIONS
function getDbId(id) {
    // id.toLowerCase();
    // this will give an error => Property 'toLowerCase' does not exist on type 'string | number'.
    // so, we have to first verify before using it
    if (typeof id === 'string') {
        id.toLowerCase();
    }
    console.log("The databse id is ".concat(id));
}
// now, we can pass string and number as an argument for a function
console.log(getDbId(1));
console.log(getDbId("2"));
var data = [1, 2, 3, 4, 5, "start"];
// Type 'string' is not assignable to type 'number'.
var names = ["vai", "bhav", 123];
