class Book {
	constructor(bookJSON) {
		this.id = bookJSON.id
		this.title = bookJSON.attributes.title
		this.summary = bookJSON.attributes.summary
		this.author = bookJSON.attributes.author.name
	}

	renderBook() {
		// return `<input type="checkbox" name="book-${this.id}" value="false">${this.title}<br>`
		let div = document.createElement('div')
		div.setAttribute('class', 'single-book')

		let content = document.createElement('div')
		content.setAttribute('class', 'content')

		let header = document.createElement('h3')
		header.innerHTML = `${this.title}`

		let authorName = document.createElement('h4')
		authorName.innerHTML = `${this.author}`

		let p = document.createElement('p')
		p.innerHTML = `${this.summary}`

		content.appendChild(header)
		content.appendChild(p)
		content.appendChild(authorName)

		div.appendChild(content)

		return div
		// return `<h3>${this.title}</h3>`
	}
}