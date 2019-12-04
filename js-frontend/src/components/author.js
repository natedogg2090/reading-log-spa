class Author {
	constructor(authorJSON) {
		this.id = authorJSON.id
		this.name = authorJSON.name
		this.book.title = authorJSON.books[0].title
		this.book.summary = authorJSON.books[0].summary
	}

	renderAuthor() {
		// let booksContainer = document.getElementById('books-container')

		// booksContainer.innerHTML = this.authors.map(author => `<li>${author.name}</li>`).join('')

		let div = document.createElement('div')
		div.setAttribute('class', 'single-author')

		let content = document.createElement('div')
		content.setAttribute('class', 'content')

		let header = document.createElement('h3')
		header.innerHTML = `${this.name}`

		let bookName = document.createElement('h4')
		bookName.innerHTML = `${this.book.title}`

		let p = document.createElement('p')
		p.innerHTML = `${this.book.summary}`

		content.appendChild(header)
		content.appendChild(p)
		content.appendChild(bookName)

		div.appendChild(content)

		return div
	}
}