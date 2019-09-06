# Array and Objects

### Перечень заданий:
  1. Создать 3 обьекта, в которых должно быть не меньше чем по 5 свойств в каждом.
  Создать новый обьект, который будет содержать все свойства каждого из трех обьектов.
```js
let obj1 = {name: 'Petya'}; 
let obj2 = {email: 'example@mail.com'}; 
let obj3 = {isHuman: true, sayHello: name => `Hello, ${name}`,}; 
const allPropObj = {
    name: 'Petya',
    email: 'example@mail.com',
    isHuman: true,
    sayHello: name => `Hello, ${name}`,
};
```

  2. Cоздать функцию, которая вернет массив значений свойств обьекта полученного в первом задании ```const allPropObj = {
    name: 'Petya',
    email: 'example@mail.com',
    isHuman: true,
    sayHello: name => `Hello, ${name}`,
}``` за исключением значений тип которых будет равен строке.
```js
getPropWithoutStr(allPropObj) /// [true, function()];
```

  3. Создать кастомную функцию которую можно вызвать из любого массива и которая будет возвращать объек, ключи и значения которого будут иметь тоже имя, что и их итерируемое значение. [Подсказка](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype)
```js
let arr = ['apple', 'banana', 'kiwi']; 
let returnedObject = arr.createObjFromArr(); ///
returnedObject {
    kiwi: 'kiwi',
    banana: 'banana',
    apple: 'apple',
}
```
### Все сделанные таски закидываем в ваши [GitHub](https://github.com/) аккаунты в созданные вами репозитории с именем Module1_Test1
