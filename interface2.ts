interface User {
     name: string,
     age: number,
     greet(): string,
     // greet is method which 'returns' string as an output
     couponCode(offer: number): number
}

const employeee: User = {
     name: "Vaibhav",
     age: 26,

     greet : () => {
         return "hello there"
     },

     couponCode: (perct: 10) => { // methods which accepts an argument;
          return perct*1.10 // argument of type number and returns number
     }
}

// re-opening of interface

interface Users {
     name: string,
     age: number,
     salary: number,
}

// we can create new interface with "same name"

interface Admin extends Users{
     eligible: boolean
}

const employer2: Admin = {
     name: "shubham2",
     age: 244,
     salary: 240000,
     // we can add Admin's key:value thing which is extended
     eligible: true,
}

export{}