type User = {
     name: string,
     id: number,
}

type Admin = {
     userName: string,
     age: number,
}

// when hitesh is user

let hitesh: User | Admin = {
     name: "vai",
     id: 12,
}

// now, hitesh is admin so it will use "userName" and "age" and not "name" and "id" 
// so it's acceptable and can be done by using 'union'

let hiteshAdm: User | Admin = {
     userName : "Admin Bhai",
     age: 156,
}

// UNION IN CASE OF FUNCTIONS

function getDbId(id: number | string) {
     // id.toLowerCase();
     // this will give an error => Property 'toLowerCase' does not exist on type 'string | number'.
     // so, we have to first verify before using it
     if (typeof id === 'string') {
          id.toLowerCase();
     } 
     console.log(`The databse id is ${id}`);
}

// now, we can pass string and number as an argument for a function


console.log(getDbId(1));
console.log(getDbId("2"));


const data: number[] = [1, 2, 3, 4, 5, "start"];
// Type 'string' is not assignable to type 'number'.

const names: string[] = ["vai", "bhav", 123];
// Type 'number' is not assignable to type 'string'.

// if you want to have numbers and string in an array then,

const mixedData : (number|string)[] = [1,2,3, "vaibhav", "matere", 4, 5]

export{}