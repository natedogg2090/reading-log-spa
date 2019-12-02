class BooksAdapter {
	constructor() {
		this.baseUrl = 'http://localhost:3000/api/v1/books'
	}

	getBooks() {
		return fetch(this.baseUrl).then(res => res.json())
	}
}