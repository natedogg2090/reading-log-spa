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
		.then(() => {
			this.sortAuthors()
		})
	}

	sortAuthors() {
		// console.log('sorting authors')
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
		console.log(this.authors)
	}

}