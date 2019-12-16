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

	updateBook(id, checked) {
		const book = {
			id: id,
			complete: checked
		}

		return fetch(this.baseUrl + `/${book.id}`, {
			method: 'PATCH',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({ book })
		}).then(res => res.json())
	}

	destroyBook(id) {
		const book = {
			id: id
		}

		return fetch(this.baseUrl + `/${book.id}`, {
			method: 'DELETE',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({ book })
		})
	}

}