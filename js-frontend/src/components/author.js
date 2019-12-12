class Author {
	constructor(authorJSON) {
		this.id = authorJSON.id
		this.name = authorJSON.attributes.name
		this.booksArray = authorJSON.attributes.books //will return an array of books.
		// this.bookSummary = authorJSON.attributes.books[0].summary
	}

	renderAuthor() {

		let div = document.createElement('div')
		div.setAttribute('class', 'single-author')

		let content = document.createElement('div')
		content.setAttribute('class', 'content')

		let header = document.createElement('h3')
		header.innerHTML = `${this.name}`

		content.appendChild(header)

		this.booksArray.map(book => {
			let li = document.createElement('li')
			li.innerHTML = `${book.title}`

			content.appendChild(li)
		})
		

		// let p = document.createElement('p')
		// p.innerHTML = `${this.bookSummary}`
		
		// content.appendChild(p)

		div.appendChild(content)

		return div
	}

}