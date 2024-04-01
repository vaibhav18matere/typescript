type User = {
    name: string,
    phone: number,
    isActive: boolean
}

function createUser (user:User):User{
    return {name:"", phone:0, isActive: false}
}

createUser({ name: "Vaibhav", phone: 987542, isActive: false });

// READONLY

type User2 = {
   readonly id: number,
    name: string,
    age: number,
    isActive: boolean,
}

let myUSer: User2 = {
     id: 1,
     name: "Vai",
     age: 26,
     isActive: true,
}

// if we do,
// myUSer.id = 12;
// it will show error => "Cannot assign to 'id' because it is a read-only property."
export{}