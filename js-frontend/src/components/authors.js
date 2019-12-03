class Authors {
	constructor() {
		this.authors = []
		this.adapter = new AuthorsAdapter()
		this.fetchAuthors()
	}
}