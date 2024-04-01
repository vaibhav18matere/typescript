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