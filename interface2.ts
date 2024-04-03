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