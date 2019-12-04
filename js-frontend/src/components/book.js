class Book {
	constructor(bookJSON) {
		this.id = bookJSON.id
		this.title = bookJSON.title
		this.summary = bookJSON.summary
	}

	renderBook() {
		// return `<input type="checkbox" name="book-${this.id}" value="false">${this.title}<br>`
		let div = document.createElement('div')
		div.setAttribute('class', 'content')

		let header = document.createElement('h3')
		header.innerHTML = `${this.title}`

		let p = document.createElement('p')
		p.innerHTML = `${this.summary}`

		div.appendChild(header)
		div.appendChild(p)

		return div
		// return `<h3>${this.title}</h3>`
	}
}