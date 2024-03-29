// ## TASK-01

// Доповнити функціонал 2-ї задачі з минулої домашньої роботи. До функції `profileMagazine`, яка повертає обʼєкт інтернет-магазину з додатковими методами по роботі з ним додати наступні параметри та методи.

// #### Arguments:

// - _description_ - опис про магазин

// #### Return value

// Обʼєкт інтернет магазину, у якого наявні одноіменні аргументам властивості, а також 3 методи - `makeBlackFriday`, `verifySore`, `ellipsisText`, `censorshipCheck`

// ### метод `ellipsisText`

// Перевіряє максимальну довжину рядка, та за умови якщо рядок перевищує максимульну кількість символів - обрізає рядок та додає "..."

// #### Arguments:

// - _text_ - текст для перевірки
// - _maxLength_ - розмір максимальної довжини рядка в числовому значенні

// #### Return value

// Якщо максимальна кількість символів не перевищена - рядок без змін.
// Якщо максимальна кількість символів перевищена - рядок з "..." замість зайвих символів.

function profileMagazine(label, schedule, products) {
	return {
		label,
		schedule,
		products,
		ellipsisText(text, maxLength) {
			if (text.length > maxLength) {
				return input.substring(0, maxLength) + '...'
			}
			return text
		},
	}
}

// ### метод `censorshipCheck`

// Перевіряє рядок(рекламу магазину) на цензуру, тобто якщо у тексті є заборонене слово то видаляє його по всьому рядку

// #### Arguments:

// - _advertisement_ - текст(рекламний текст) для перевірки
// - _forbiddenWord_ - заборонене слово

// #### Return value

// Якщо заборонене слово не знайдено - рядок без змін.
// Якщо заборонене слово присутнє в тексті - оновлений рядок без цього слова.

function profileMagazine(label, schedule, products) {
	return {
		label,
		schedule,
		products,
		ellipsisText(text, maxLength) {
			if (text.length > maxLength) {
				return input.substring(0, maxLength) + '...'
			}
			return text
		},
		censorshipCheck(advertisement, forbiddenWord) {
			return advertisement.split(forbiddenWord).join('')
		},
	}
}

// ## TASK-02

// Доповнити функціонал з минулої задачі. До функції `profileMagazie`, яка повертає обʼєкт інтернет-магазину з додатковими методами по роботі з ним додати наступні параметри та методи.

// #### Arguments:

// - _startSaleDate_ - дата початку знижок

// #### Return value

// Обʼєкт інтернет магазину, у якого наявні одноіменні аргументам властивості, а також 4 методи - `makeBlackFriday`, `verifySore`, `ellisisText`, `checkDaytoSale`

// ### метод `checkDaytoSale`

// Вираховує скільки днів залишилось до початку розпродажу

// #### Arguments:

// - _startSaleDate_ - дата початку розпродажу у форматі(22.07.2023)

// #### Return value
// Кількість днів яка залишилась до початку розпродажу

function profileMagazine(label, schedule, products, startSaleDate) {
	return {
		label,
		schedule,
		products,
		ellipsisText(text, maxLength) {
			if (text.length > maxLength) {
				return input.substring(0, maxLength) + '...'
			}
			return text
		},
		censorshipCheck(advertisement, forbiddenWord) {
			return advertisement.split(forbiddenWord).join('')
		},
		checkDaytoSale(startSaleDate) {
			const reversDate = startSaleDate.split('').reverse().join('')
			const currentDate = new Date()
			const saleDate = new Date(reversDate)
			const timeDifference = saleDate - currentDate

			const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24))

			return daysRemaining
		},
	}
}

// ## TASK-03

// Доповнити функціонал з минулої задачі. До функції `profileMagazie`, яка повертає обʼєкт інтернет-магазину з додатковими методами по роботі з ним додати наступні параметри та методи.

// #### Arguments:

// - _team_ - кількість працівників в магазині

// #### Return value

// Обʼєкт інтернет магазину, у якого наявні одноїменні аргументам властивості, а також 5 методи - `makeBlackFriday`, `verifySore`, `ellisisText`, `checkDaytoSale`, `prepareInventory`

// ### метод `prepareInventory`

// Вираховує чи встигає команда магазину підготувати товар до розпродажу за умови, що 1 працівник в день може підготовляти лише 10 одиниць товару.

// #### Arguments:

// немає

// #### Return value

// Значення - true, в разі що магазин встигає до розпродажу, та значення - false, якщо ні

function profileMagazine(label, schedule, products, startSaleDate, team) {
	return {
		label,
		schedule,
		products,
		startSaleDate,
		team,
		ellipsisText(text, maxLength) {
			if (text.length > maxLength) {
				return input.substring(0, maxLength) + '...'
			}
			return text
		},
		censorshipCheck(advertisement, forbiddenWord) {
			return advertisement.split(forbiddenWord).join('')
		},
		checkDaytoSale() {
			const reversDate = this.startSaleDate.split('').reverse().join('')
			const currentDate = new Date()
			const saleDate = new Date(reversDate)
			const timeDifference = saleDate - currentDate

			const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24))

			return daysRemaining
		},
		prepareInventory() {
			const saleDay = this.checkDaytoSale()
			const teamPerDay = this.team * 10

			const allPrepareGoods = saleDay * teamPerDay

			if (allPrepareGoods >= this.products.length) {
				return true
			} else {
				return false
			}
		},
	}
}
