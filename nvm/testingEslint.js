function greet(user){
if(user){
return "Hello," + user + "!";
}else{
return "Hello, Guest!"
}
}

var users=[
{name:"Aleksey",age:30},
{name:"Jane",age:25},
{name:"Bob", age:17}
]

users.forEach(function(user){
console.log(greet(user.name))
console.log("Age:", user.age)
})