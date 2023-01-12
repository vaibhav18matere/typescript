let greetings: string = "Vaibhav!";

//greetings = 6;

// Type 'number' is not assignable to type 'string'

console.log(greetings);

let num = 6;
// num.toLowerCase();

// Property 'toLowerCase' does not exist on type 'number'

// NUMBER :

let userId: number = 188.123;

// userId.
// all pre-defined methods of numbers are available here after writing dot(.)


// BOOLEAN

let isLoggedIn: boolean = false;

// isLoggedIn.
// all pre-defined methods of isLoggedIn are available here after writing dot(.)


// ANY :

let hero;

function getHero() {
     return "I am hero";
}

hero = getHero();
// hover on "hero" => here hero has type "any" => by default.
// this breaks consistency of code, so define the type upfront

let actor:string;

function getActor() {
     return "I am hero";
}

actor = getActor();



export {}