// ## TASK-01

// Написати фунцію, яка буде визначати чи є буква в слові на визначеній позиції.

// ##### Arguments:

// - _word_ - слово, на якому треба буде перевіряти наявність букви
// - _index_ - позиція символу на якому треба перевірити здогадку
// - _char_ - буква, наявність якої треба перевіряти в слові

// ##### Return value

// true або false, залежно від того є буква в слові чи ні.
function checkCharAt(word, index, char) {
	return word.charAt(index) === char
}

// console.log(checkCharAt('gogi', 2, 'g')) // true
// console.log(checkCharAt('gogi', 2, 'o')) // false

// ## TASK-02

// Напишіть функцію, яка перевірятиме довжину свого аргументу.

// ##### Arguments:

// - str - строка, довжину якої має перевіряти функція
// - expectedLength - очікувана довжина строки

// ##### Return value

// true або false

function checkLengthString(str, expectedLength) {
	return str.length === expectedLength
}

console.log(checkLengthString('gogi', 4)) // true
console.log(checkLengthString('gogi', 3)) // false

// ## TASK-03

// Напишіть гру для відгадування слова.

// #### Game flow:

// - Спитати чи користувач хоче зіграти у гру?
// - Попросити користувача загадати слово.
// - Для кожного символу у загаданому слові, перевірити чи є такий символ у слові взагалі та чи співпадає здогадка користувача із символом на поточній позиції.
// - Якщо здогадка користувача _вірна_ - переходити до наступного символу
// - Якщо здогадка користувача _не вірна_ - повторювати запит символу допоки не набереться 5 помилкових здогадок, далі - вивести в консоль "You lose!". Якщо одна зі здогадок виявилася вірною - переходити на відгадування наступного символу.
// - Якщо користувач виграв - вивести у консоль "You win!"

let agreement = confirm('Ця гра для двох людей. Хочеш зіграти?')
let wrongLetter = 0
if (!agreement) {
	alert('Шкода!')
} else {
	let word = prompt('Почнемо! Напиши слово, яке буде вгадувати другий гравець.')
	let char = prompt('Завдання для другого гравця: вгадай та напиши першу букву загаданого слова.')

	for (let i = 0; i <= word.length - 1; i++) {
		if (!checkCharAt(word, i, char)) {
			if (wrongLetter === 4) {
				alert("ти не вгадав цю букву п'ятий раз - ти програв")
				break
			} else {
				char = prompt('ти не вгадав! спробуй відгадати цю букву ще раз')
				wrongLetter += 1
				i -= 1
			}
		} else if (checkCharAt(word, i, char) && i === word.length - 1) {
			alert('вітаю! ти вгадав все слово.')
			break
		} else {
			char = prompt('ти вгадав! спробуй вгадати наступну букву')
			wrongLetter = 0
		}
	}
}
