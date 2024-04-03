"use strict";
// USED WHEN "ORDER OF AN ARRAY IS VERY IMPORTANT" 
// ex. getting response back from an API call and when we sue those values directly
Object.defineProperty(exports, "__esModule", { value: true });
var stringNumberTuple;
stringNumberTuple = ["vaibhav", 25];
// pass the initial two conditions of string and number.
var strNumTuple;
var userCreated = [1, "vaibhavmatere", true];
// but we can override the type by declaring
var userCreated2 = [1, "vaibhavmatere", true];
userCreated2[1] = "vpm"; // value can change
// we can use array methods (push, pop, shift, unshift) and that makes it weird
userCreated2.push(true);
