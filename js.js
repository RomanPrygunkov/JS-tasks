const pass = prompt("Введите пароль", '');

let isUpperCase = 0 
let isNumber = 0

for (const word of pass) {
	
	if ( !Number(word) && word === word.toUpperCase() && word !==' ') {   
		isUpperCase += 1
	}
	
	if (Number(word) && word !== " ") {  
		isNumber += 1
	}
}

if (pass.length > 3 && pass.length <= 30 && isUpperCase >= 1 && isNumber >= 1) {   
																					
	alert('Пароль валидный. Добро пожаловать в аккаунт!')

} else {
	alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.')
	}

