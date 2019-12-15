class Genre {
	constructor(genreJSON) {
		this.name = genreJSON.attributes.name
		this.booksArray = genreJSON.attributes.books
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

			let a = document.createElement('a')
			a.setAttribute('href', `${book.id}`)
			a.setAttribute('class', "genre")
			a.innerHTML = `${book.title}`

			li.appendChild(a)
			content.appendChild(li)
		})

		div.appendChild(content)

		return div
	}
}