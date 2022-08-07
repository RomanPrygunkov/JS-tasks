

const pass = prompt("Введите пароль", '');

let isUpperCase = 0  // Переменная для большой буквы
let isNumber = 0	// Переменная для цифры



for (const word of pass) {
	
	
	
	if ( !Number(word) && word === word.toUpperCase()) {    // Если число то в "большую букву" плюсуется 0
		isUpperCase += 1
	}
	
	

	if (Number(word) && word !== " ") {  
		isNumber += 1
	}
}



if (pass.length > 3 && pass.length <= 30 && isUpperCase >= 1 && isNumber >= 1) {   // Если итоговая сумма переменных для большой буквы и цифры больше 0, то пароль валидный
																					
	alert('Пароль валидный. Добро пожаловать в аккаунт!')

} else {
	alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.')
	}

