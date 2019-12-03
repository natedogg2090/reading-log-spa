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
			authors.forEach(author => this.authors.push(new Author(author))) // pushing a new book instance into the array
		})
		.then(() => {
			// this.sortBooks()
			// this.renderBooks()
			console.log(this.authors)
		})
	}
}