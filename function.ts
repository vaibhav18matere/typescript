function addTwo(num) {
     num.toLowerCase();
     // should not allow this 
     return num + 2;
}

addTwo("5");
// to avoid all of this type checking and input validations,


function addTwoTo(num: number) {
     // num.toLowerCase();
     // will give an error => Property 'toLowerCase' does not exist on type 'number'
     return num + 2;
}

// addTwoTo("5")
// will give an error => 'string' is not assignable to parameter of type 'number'
addTwoTo(5);

// FUNCTION - for multiple arguments

function signUpUser(name:string, email:string, feesPaid:boolean) {
}

signUpUser("Vaibhav", "vpm00718897@gmail.com", false);

// FUNCTION - for multiple arguments - default type

function loginUser(name:string, email:string, feesPaid = false) {
}

loginUser("Vaibhav", "vpm18897@gmail.com");

// a better way to write function =>  USING ARROW FUNCTION

const getHello = (s:string):string => {
     return "Heyy"
}

//example 2

const heroes = ["Shaktiman", "Son Pari", "Hatim"];

// if you hover on "item" in heroes.map, it will show it's type as STRING without even mentioning, because TS is smart enough to understand it.
// so, we don't really need to check type as - (item):string but if you do this then it's good thing.

const nayeHero = [1,2,3];

heroes.map((item):string => {
     return `hero is ${item}`;
});


// for nayeHero.map, item type is NUMBER now.

nayeHero.map(item => {
     return 2; // you can do this also but no use.
});


// NEVER

function clgError(msg:string) {
     console.log(msg);   
}
// if you hover on clgError function you will get this inbuilt type => function clgError(msg: string): void
// means it's not returning anything. so write like this

function clgError2(msg:string): void {
     console.log(msg);  
}

// FOR ERROR HANDLING :
// if the function never returns vlue then instead of void, use "never"

function handleError(errorMsg:string):never {
     throw new Error(errorMsg);
}


export{}