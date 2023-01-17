function showTodos(todo) {
    console.log(todo.name + " : " + todo.surname);
}
var myTodo = {
    name: "Vaibhav",
    surname: "Matere"
};
showTodos(myTodo);
function myProfile(info) {
    console.log(info.title + " " + info.descr);
}
var myInfo1 = { title: "Engg", descr: "WebDev" };
myProfile(myInfo1);
// try changing values of myInfo1 and see the type of error you get
