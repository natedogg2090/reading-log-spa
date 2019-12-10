class BooksAdapter {
	constructor() {
		this.baseUrl = 'http://localhost:3000/api/v1/books'
	}

	getBooks() {
		return fetch(this.baseUrl).then(res => res.json())
	}

	createBook(title, summary, authorName, genreName) {
		const book = {
			title: title,
			summary: summary
		}

		const author = {
			name: authorName
		}

		const genre = {
			name: genreName
		}

		return fetch(this.baseUrl, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({ book, author, genre })
		}).then(res => res.json())
	}

	showBook(id) {
		return fetch(this.baseUrl + `/${id}`).then(res => res.json())
	}
}