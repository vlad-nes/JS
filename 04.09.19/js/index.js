
// const allPropObj = {
// 	name: 'Petya',
// 	email: 'example@mail.com',
// 	isHuman: true,
// 	sayHello: name => `Hello, ${name}`,
// };

// let getProWithoutStr = function(obj) {
// 	let valueArr = Object.value(obj);
// 	let resultArr = valueArr.filter(item => typeof item !== "string")
// 	return resultArr;
// }

let arr = ['apple', 'banana', 'kiwi']; 
function createObjFromArr(arrProp) {
	let objResult = {};
	for(let i = 0; i < arrProp.length; i++){
		let obj = {};
		let keyName = arrProp[i];
		obj[keyName] = arrProp[i];
		objResult = {...objResult, ...obj};
	}
	return objResult;
}

console.log(createObjFromArr(arr));