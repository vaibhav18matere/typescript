"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Vaibhav!";
//greetings = 6;
// Type 'number' is not assignable to type 'string'
console.log(greetings);
var num = 6;
// num.toLowerCase();
// Property 'toLowerCase' does not exist on type 'number'
// NUMBER :
var userId = 188.123;
// userId.
// all pre-defined methods of numbers are available here after writing dot(.)
// BOOLEAN
var isLoggedIn = false;
// isLoggedIn.
// all pre-defined methods of isLoggedIn are available here after writing dot(.)
// ANY :
var hero;
function getHero() {
    return "I am hero";
}
hero = getHero();
// hover on "hero" => here hero has type "any" => by default.
// this breaks consistency of code, so define the type upfront
var actor;
function getActor() {
    return "I am hero";
}
actor = getActor();
