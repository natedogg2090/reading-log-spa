class Book {
	constructor(bookJSON) {
		this.id = bookJSON.id
		this.title = bookJSON.title
		this.summary = bookJSON.summary
	}

	renderLi() {
		return `<li>${this.title}</li>`
	}
}