// USED WHEN "ORDER OF AN ARRAY IS VERY IMPORTANT" 
// ex. getting response back from an API call and when we sue those values directly

let stringNumberTuple: [string, number];

stringNumberTuple = ["vaibhav", 25];
// pass the initial two conditions of string and number.

let strNumTuple: [string, number];

/// strNumTuple = [12, "Astitva Group"];
// now, this will give an error as the ORDER IS NOT THE SAME

type NameTup = [number, string, boolean];

let userCreated : NameTup = [1, "vaibhavmatere", true]

// but we can override the type by declaring

const userCreated2: NameTup = [1, "vaibhavmatere", true];
userCreated2[1] = "vpm"; // value can change


// we can use array methods (push, pop, shift, unshift) and that makes it weird

userCreated2.push(true);


     
     

export{}

