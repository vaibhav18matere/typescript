type User = {
    name: string,
    phone: number,
    isActive: false
}

function createUser (user:User):User{
    return {name:"", phone:0, isActive: false}
}

createUser({ name: "Vaibhav", phone: 987542, isActive: false });

export{}