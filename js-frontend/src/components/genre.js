class Genre {
	constructor(genreJSON) {
		this.name = genreJSON.attributes.name
		this.booksArray = genreJSON.attributes.books
		// this.authorArray = genreJSON.attributes.authors
	}

	renderGenre() {

		let div = document.createElement('div')
		div.setAttribute('class', 'single-genre')

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

		div.appendChild(content)

		return div
	}
}