

const pass = prompt("Введите пароль", '');

const arrayFromPass = pass.split ('') // Массив из строки
let isUpperCase = 0  // Переменная для большой буквы
let isNumber = 0	// Переменная для цифры

for (const word of arrayFromPass) {
	
	
	
	if (Number(word)) {    // Если число то в "большую букву" плюсуется 0
		isUpperCase += 0
	}
	else if (word === word.toUpperCase()) { // Если верхний регистр то +1
 		isUpperCase +=1
	}
	

	if (Number(word) >= 0 && Number(word) <= 9 && Number(word) !== NaN) {  
		isNumber += 1
	}
}

if (!pass.includes(" ") && pass.length >= 3 && pass.length <= 30 && isUpperCase >= 1 && isNumber >= 1) {   // Если итоговая сумма переменных для большой буквы и цифры больше 0, то пароль валидный
																					
	alert('Пароль валидный. Добро пожаловать в аккаунт!')

} else {
	alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.')
	}

