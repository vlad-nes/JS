// let obj = {
// 	name: 'Alex',
// 	surname: '2'
// };
// for (let key in obj) {
// 	key == name;
// 	obj[Key] //2
// };
// let result = [];
// for(let value of obj) {
// 	res.push(value)
// };
//in -> key
//of -> value

let user = emplyeeArr[4];
for (let key in user){
	console.log(key)
};

for (let key in user) {
	console.log(typeof key)
};


for (let key in user) {
	console.log(user[key])
};

for (let key in user){
	console.log(`key: ${key}, value: ${user[key]}`)
};

// for (let key of user){
// 	console.log(value) //не работатет для объктов.лучше для массива
// };

let arr = ['some']
for (let key in arr) {
	console.log(key)
};

for (let value of arr) {
	console.log(value)
};

Object.values(user); // read about it   ||

Object.entries(user); // read about it

//example from board
// let [id, name]=[1,'Alex'];
// let id = 1;
// let name = 'Alex'

// emplyeeArr
let res;
let getId = function(arr) {
	// for (let key of arr){
	// 	return arr[key]
	// }



	// task 1
	let result = [];
for(let value of arr) {
	result.push(value.id)
};	
	return result
}
res = getId(emplyeeArr);

console.log(getId(emplyeeArr))

let getSumId = function(arr) {
	let resSum = 0;
	for (let i = 0; i < arr.length; i++){
		resSum += arr[i]
	}
	return resSum
}
console.log(getSumId(res))


// task2

	
	 let a = arr.map(function (emplyeeArr) {
		let arr3 = [];
		for (key in user){
			arr.push(key)
		}
    return arr3
  });

console.log(a)

// let arr1 = arr.map((user), function() {
// 	let arr = [];
// 	for (let key in user){
// 		arr.push(key)
// 	}
// 	return arr;
// })
// console.log(arr1)

//proshe
emplyeeArr.map((user)=> Object.keys(user))

// emplyeeArr.map((user)=> Object.values(user)) ???

let ab = ['asd', 'rth', 'qwer', 'asdf', 'zxcv']
console.log(ab.sort())


let abc = [1,6,3,8,5,9,7]
console.log(abc.sort())

abc.sort((a,b) => a-b)

abc.sort((a,b) => {
if (a > b) return -1;
if (a < b) return 1;
if (a == b) return 0;
})

abc.sort((a,b) => {
if (a > b) return 1;
if (a < b) return -1;
if (a == b) return 0;
})

//sort array on salary
emplyeeArr.sort((a,b) => {
	if (a.salary > b.salary) return 1;
	if (a.salary < b.salary) return -1;
	if (a.salary == b.salary) return 0;
	})

	emplyeeArr.sort((a,b) => {
		if (a.workExperience > b.workExperience) return -1;
		if (a.workExperience < b.saworkExperiencelary) return 1;
		if (a.workExperience == b.workExperience) return 0;
		})

		// emplyeeArr.sort((a,b) => {
		// 	if (a.salary > b.salary) return 1;
		// 	if (a.salary < b.salary) return -1;
		// 	if (a.salary == b.salary) return 0;
		// 	})

		let sortSalary = function(arr) {
			 arr.sort((a,b) => {
		 	if (a.salary > b.salary) return 1;
		 	if (a.salary < b.salary) return -1;
		 	if (a.salary == b.salary) return 0;
			 });
			 let newArr = [];
			 newArr = arr.map(function(obj) {
				return `${this.surname} ${this.name}` 
			 });
			 return newArr
			 
		}