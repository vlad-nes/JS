// let obj = {
// 	name: 'qwerty'
// };

// console.log(obj.name);


// obj.__proto__.name2 = 'other name';

let dataBase = [
	{
		id: 0,
		userName: 'Alex',
		email: 'example@gmail.com',
		age: 21,
	},
	{
		id:1,
		userName: 'Anna',
		email: 'anna.user@gmail.com',
		age: 20,
	},
	{
		id:2,
		userName: 'Mikhail',
		email: 'anna.mihaboss@gmail.com',
		age: 25,
	},
];

let usersArr = dataBase.map((user)=>{
	// console.log(user)
	return user.age
	// console.log(user.age)
	// console.log(user.email)
})

console.log(usersArr)

let usersArr2 = dataBase.map((user)=>{
	// console.log(user)
	return user.userName
	// console.log(user.age)
	// console.log(user.email)
})

console.log(usersArr2)

let usersArr3 = dataBase.map((user)=>{
	// console.log(user)
	return user.email
	// console.log(user.age)
	// console.log(user.email)
})

console.log(usersArr3)

let usersArr4 = dataBase.find((user)=>{
	return user.userName =='Mikhail'
})
console.log(usersArr4)