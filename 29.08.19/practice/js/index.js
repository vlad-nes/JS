var calc = function(num1, num2, num3) {
	if (num3 == 'umn') {
	return num1 * num2;
	};
	if (num3 == 'del') {
	return num1 / num2;
	};
	if (num3 == 'sum') {
	return num1 + num2;
	};
	if (num3 == 'vych') {
	return num1 - num2;
	};
};

var number1 = document.getElementById('num1');
var number2 = document.getElementById('num2');
var btnUmn = document.getElementById('umn');
var btnDel = document.getElementById('del');
var btnSum = document.getElementById('sum');
var btnMin = document.getElementById('min');

number1Val = number1.addEventListener('change', function(e) {
    number1 = e.target.value;
})
number2Val = number2.addEventListener('change', function(e) {
  number2 = e.target.value;
})
number3Val = number3.addEventListener('change', function(e) {
  number3 = e.target.value;
})
number4Val = number4.addEventListener('change', function(e) {
  number4 = e.target.value;
})

