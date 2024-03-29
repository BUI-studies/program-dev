// ## TASK-01

// Написати функцію `renderList`, виводить на екран список на основі масиву обьектів, де властивість - `name` має бути заголовком(h2), а властивість `price` має бути текстом(p).

// #### Arguments:

// - _list_ - масив обь'єктів із власивостями(name, price)

// #### Return value

// відсутнє

// #### Розмітка HTML:

// ```html
/* <ul>
  <li>
    <h2>хрещатик</h2>
    <p>7,99 uah</p>
  </li>
  <li>
    <h2>100% пломбір</h2>
    <p>2,50 uah</p>
  </li>
</ul> */
// ```

// #### Код для параметру функції:

// ```js
const dataIcecream = [
	{ name: 'хрещатик', price: '7,99 uah' },
	{ name: '100% пломбір', price: '2,50 uah' },
	{ name: 'maximus', price: '12,99 uah' },
	{ name: 'пташине молоко', price: '20,99 uah' },
]
// ```

function renderList(list) {
	const ul = document.createElement('ul')
	list.forEach(item => {
		const li = document.createElement('li')
		const h2 = document.createElement('h2')
		const p = document.createElement('p')
		h2.textContent = item.name
		p.textContent = item.price
		li.append(h2, p)
		ul.append(li)
	})
	document.body.append(ul)
}

// ## TASK-02

// Написати функцію `clearLinksPage`, яка буде перевіряти всі посилання на сторінці, та в разі якщо посилання має пустий атрибут 'href', видаляти таке посилання з ромітки

// #### Arguments:

// Відсутні

// #### Return value

// відсутнє

// #### Розмітка HTML:

// ```html
{
	/* <header>
  <h1>Apple</h1>
  <menu>
    <a href="/home">home</a>
    <a href="/shops">shops</a>
    <a href="/aboutus">about us</a>
    <a href="">contact</a>
  </menu>
</header>
<section>
  <h2>Partners</h2>
  <ul>
    <li><a href="/lg">lg</a></li>
    <li><a href="/glass">gorilla glass</a></li>
    <li><a href="">samsung</a></li>
  </ul>
</section>
<footer>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, officiis
    magni, repellendus, consequatur cumque explicabo saepe modi aut qui
    accusamus <a href="">molestiae</a> perferendis nulla minima ducimus dolore
    voluptatem deleniti a cum fuga! Ipsam mollitia, quia ab veniam eius dolores
    nesciunt voluptas.
  </p>
</footer> */
}
// ```

function clearLinksPage() {
	const links = document.querySelectorAll('a')
	links.forEach(link => {
		if (!link.href) {
			link.remove()
		}
	})
}

// ## TASK-03

// Написати функцію `filterСlothes`, яка буде фільтрувати елементи на сторінці по заданому значеню з інпута при натисканні на кнопку, в разі якщо такого значення не знайдено вивести під полем для вводу помилку - "такого кольору немає в асортименті". Фільтрувати будемо по кольору одягу

// #### Arguments:

// - _color_ - значення по якому фільтруємо елементи

// #### Return value

// відсутнє

// #### Очікувана розмітка HTML:

// ```html
// <form>
//   <input type="text" placeholder="Введіть колір" class="field" />
//   <button type="submit" id="filterBtn">Фільтр</button>
// </form>
// <ul class="list">
//   <li class="list__item">футболка: червоний</li>
//   <li class="list__item">джинси: чорний</li>
//   <li class="list__item">теніска: жовтий</li>
//   <li class="list__item">теніска: червоний</li>
//   <li class="list__item">джинси: зелений</li>
//   <li class="list__item">джинси: чорний</li>
//   <li class="list__item">футболка: рожевий</li>
//   <li class="list__item">футболка: білий</li>
// </ul>
// ```

// #### Код для отримання кольору:

// ```js
document.getElementById('filterBtn').addEventListener('click', e => {
	e.preventDefault()
	const valueField = document.querySelector('.field').value
	// виклик вашої функції
	filterСlothes(valueField)
})
// ```

function filterСlothes(color) {
	const list = [...document.querySelectorAll('.list__item')]
	const newArr = list.filter(item => item.textContent.includes(color))
	const p = document.createElement('p')
	if (newArr.length === 0) {
		p.textContent = 'такого кольору немає в асортименті'
		document.body.append(p)
	} else {
		p.remove()
	}
	list.forEach(item => item.style.display = 'none')
	newArr.forEach(item => item.style.display = 'block')
}
