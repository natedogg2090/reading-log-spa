class Authors {
	constructor() {
		this.authors = []
		this.adapter = new AuthorsAdapter()
		this.fetchAuthors()
	}

	fetchAuthors() {
		this.adapter
		.getAuthors()
		.then(authors => {
			authors.data.forEach(author => this.authors.push(new Author(author)))
		})
		.then(() => {
			this.sortAuthors()
		})
	}

	sortAuthors() {
		this.authors.sort( (a, b) => {
			const nameA = a.name
			const nameB = b.name

			let comp = 0

			if (nameA > nameB) {
				comp = 1
			} else if (nameA < nameB) {
				comp = -1
			}

			return comp

		})
	}

	renderAuthors() {
		let booksContainer = document.getElementById('books-container')

		booksContainer.innerHTML = ''

		this.authors.map(author => booksContainer.appendChild(author.renderAuthor()))
	}

	showAuthor(auth) {
		let booksContainer = document.getElementById('books-container')
		
		booksContainer.innerHTML = ''

		booksContainer.appendChild(auth.renderAuthor())

		booksContainer.appendChild(this.renderNav())
	}

	renderNav() {
		let btn = document.createElement('button')
		btn.setAttribute('class', "show-all-authors")
		btn.innerHTML = "All Authors"

		btn.addEventListener('click', () => {this.renderAuthors()})

		return btn
	}

}