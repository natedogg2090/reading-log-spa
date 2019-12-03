class Book {
	constructor(bookJSON) {
		this.id = bookJSON.id
		this.title = bookJSON.title
		this.summary = bookJSON.summary
	}

	renderCheckbox() {
		return `<input type="checkbox" name="book-${this.id}" value="false">${this.title}<br>`
	}
}