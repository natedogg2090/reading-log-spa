class BooksAdapter {
	constructor() {
		this.baseUrl = 'http://localhost:3000/api/v1/books'
	}

	getBooks() {
		return fetch(this.baseUrl).then(res => res.json())
	}

	createBook(title, summary, name, genreName) {
		const book = {
			title: title,
			summary: summary
		}

		const author = {
			name: name
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
}