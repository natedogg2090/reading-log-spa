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
			authors.forEach(author => this.authors.push(new Author(author)))
		})
	}

	renderAuthors() {
		let booksContainer = document.getElementById('books-container')

		booksContainer.innerHTML = this.authors.map(author => `<li>${author.name}</li>`).join('')
	}
}