// ## TASK-01
// Написати функцію `without`, котра повертає новий обь'єкт без вказаних значень.

// #### Arguments:
// - _object_ - будь-який обь'єкт
// - _propertyName_ - назва властивості для видалення

// #### Return value
// Jбʼєкт, у якого вказана властивість має значення `null`.

// #### Код для перевірки:

const data = { login: 'gogi', password: 'GloryOfUkraine', address: 'Kiev' }
console.log(without(data, 'address',)) // { login: 'gogi', password: 'GloryOfUkraine', address: null}

function without(object, propertyName) {
	object[propertyName] = null
	return object
}

// ## TASK-02
// Написати функцію `profileMagazine`, яка повертає обʼєкт інтернет-магазину з додатковими методами по роботі з ним.

// #### Arguments:
// - _label_ - назва магазину
// - _schedule_ - розклад роботи
// - _products_ - масив продуктів, наявних на складі

// #### Return value
// Обʼєкт інтернет магазину, у якого наявні одноїменні аргументам властивості, а також 2 методи - `makeBlackFriday`, `verifySore`

// ## метод `makeBlackFriday`
// Перебрати увесь масив товарів, для кожного товару вирахувати нову ціну, просто перемноживши стару ціну на розмір знижки.

// #### Arguments:
// - _discount_ - розмір знижки числом від 0 до 1

// #### Return value
// Відсутнє

// ## метод `verifyStore`
// Метод має "пробігати" по усім товарам магазину, та для кожного звіряти його кількість з таким самим товаром на складі.
// Якщо кількість товару у магазині не збігається - переназначити її таку ж як на складі.

// #### Arguments:
// - _store_ - массив товарів на складі

// #### Return value
// Строка зі списком назв товарів кількість яких не зпівпала з наявністю у магазині.

function profileMagazine(label, schedule, products) {
	return {
		label,
		schedule,
		products
	}
}