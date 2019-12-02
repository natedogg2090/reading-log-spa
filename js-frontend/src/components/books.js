class Books {
	constructor() {
		this.books = []
		this.adapter = new BooksAdapter()
		this.fetchAndLoadBooks()
	}

	fetchAndLoadBooks() {
		this.adapter
		.getBooks()
		.then(books => {
			// books.forEach(book => this.books.push(book)) // pushing a new book instance into the array
			console.log("fetching books...")
		})
		.then(() => {
			console.log(this.books)
		})
	}
}