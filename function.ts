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

export{}