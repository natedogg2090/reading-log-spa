class Author {
	constructor(authorJSON) {
		this.id = authorJSON.id
		this.name = authorJSON.attributes.name
		this.bookTitle = authorJSON.attributes.books[0].title
		this.bookSummary = authorJSON.attributes.books[0].summary
	}

	renderAuthor() {

		let div = document.createElement('div')
		div.setAttribute('class', 'single-author')

		let content = document.createElement('div')
		content.setAttribute('class', 'content')

		let header = document.createElement('h3')
		header.innerHTML = `${this.name}`

		let bookName = document.createElement('h4')
		bookName.innerHTML = `${this.bookTitle}`

		let p = document.createElement('p')
		p.innerHTML = `${this.bookSummary}`

		content.appendChild(header)
		content.appendChild(bookName)
		content.appendChild(p)

		div.appendChild(content)

		return div
	}
}