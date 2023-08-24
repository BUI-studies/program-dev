// ## TASK-01

// Написати стрілочну функцію `fill`, котра повертає массив конктретної довжини с заповненим значенням.

// #### Arguments:

// - _arraySize_ - довжина массиву
// - _value_ - значення для наповнення

// #### Return value

// Массив з заданою довжиною, та заповнений переданим значенням

const fillArray = (arraySize, value) => Array(arraySize).fill(value)

console.log(fillArray(5, 2))

// ## TASK-02

// Написати функцію `reverseArray`, котра повертає реверснутий массив значень, але без застосування методу .reverse()

// #### Arguments:

// - _array_ - массив значень

// #### Return value

// Повертає реверснутий массив значень

const reverseArray = array => {
	let newArray = []
	for (let i = array.length - 1; i >= 0; i--) {
		newArray.push(array[i])
	}
	return newArray
}

console.log(reverseArray([1, 2, 3, 4, 5]))
// ## TASK-03

// Вам надано два відсортовані масиви, які містять лише цілі числа. Потрібно реалізувати метод `mergeArrays`, який буде об'єднувати обидва масива в один, відсортований за зростанням.

// #### Arguments:

// - _firstArray_ - перший відсортований масив
// - _secondArray_ - другий відсортований масив

// #### Return value

// Повертає масив цілих чисел відстортований за зростанням, що мывстить усы елементи обох масивыв переданих у параметрах.

// ### Exmaple

const mergeArrays = (firstArray, secondArray) => {
	const mergeArr = [...firstArray, ...secondArray]

	return mergeArr.filter((elem, index) => mergeArr.indexOf(elem) === index).sort((a, b) => a - b)
}
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])) // --> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
