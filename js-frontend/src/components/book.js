class Book {
	constructor(bookJSON) {
		this.id = bookJSON.id
		this.title = bookJSON.attributes.title
		this.summary = bookJSON.attributes.summary
		this.author = bookJSON.attributes.author
	}

	renderBook() {
		// return `<input type="checkbox" name="book-${this.id}" value="false">${this.title}<br>`

		let div = document.createElement('div')
		div.setAttribute('class', 'single-book')

		let content = document.createElement('div')
		content.setAttribute('class', 'content')

		let header = document.createElement('h3')
		header.innerHTML = `${this.title}`

		let a = document.createElement('a')
		a.setAttribute('href', `/${this.author.id}`)
		a.innerHTML = `${this.author.name}`

		let authorName = document.createElement('h4')
		// authorName.innerHTML = `${this.author.name}`

		let sumDiv = document.createElement('div')
		sumDiv.setAttribute('class', 'book-summary')

		let p = document.createElement('p')
		p.innerHTML = `${this.summary}`

		content.appendChild(header)
		authorName.appendChild(a)
		// content.appendChild(p)

		div.appendChild(content)
		div.appendChild(authorName)
		sumDiv.appendChild(p)
		div.appendChild(sumDiv)

		return div
		// return `<h3>${this.title}</h3>`
	}

}