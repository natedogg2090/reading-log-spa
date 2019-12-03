class AuthorsAdapter {
	constructor() {
		this.baseUrl = 'http://localhost:3000/api/v1/authors'
	}

	getAuthors() {
		return fetch(this.baseUrl).then(res => res.json())
	}
}