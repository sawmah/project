function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "Userwww" };
document.body.innerHTML = greeter(user);
