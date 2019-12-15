class Author {
	constructor(authorJSON) {
		this.id = authorJSON.id
		this.name = authorJSON.attributes.name
		this.booksArray = authorJSON.attributes.books
	}

	renderAuthor() {

		let div = document.createElement('div')
		div.setAttribute('class', 'single-author')
		div.setAttribute('id', `${this.id}`)

		let content = document.createElement('div')
		content.setAttribute('class', 'content')

		let header = document.createElement('h3')
		header.innerHTML = `${this.name}`

		content.appendChild(header)

		this.booksArray.map(book => {
			let li = document.createElement('li')

			let a = document.createElement('a')
			a.setAttribute('href', `${book.id}`)
			a.setAttribute('class', "book")
			a.innerHTML = `${book.title}`

			li.appendChild(a)
			content.appendChild(li)
		})

		div.appendChild(content)

		return div
	}

}