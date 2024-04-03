function showTodos(todo: { name: string, surname: string }) {
     
     console.log(todo.name+" : "+todo.surname);
     
}

let myTodo = {
     name: "Vaibhav",
     surname:"Matere"
}

showTodos(myTodo);

// better way to write interface is
  interface Info {
    title: string;
    descr: string;
  }

  function myProfile(info: Info) {
    console.log(info.title + " " + info.descr);
  }

  let myInfo1 = { title: "Engg", descr: "WebDev" };

myProfile(myInfo1);
  
// try changing values of myInfo1 and see the type of error you get