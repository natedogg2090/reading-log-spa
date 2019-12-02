class Books {
	constructor() {
		this.books = []
		this.adapter = new BooksAdapter()
		this.initBindEventListeners()
		this.fetchAndLoadBooks()
	}

	initBindEventListeners() {
		this.booksContainer = document.getElementById('books-container')
	}

	fetchAndLoadBooks() {
		this.adapter
		.getBooks()
		.then(books => {
			books.forEach(book => this.books.push(new Book(book))) // pushing a new book instance into the array
		})
		.then(() => {
			this.renderBooks()
		})
	}

	renderBooks() {
		this.booksContainer.innerHTML = this.books.map(book => book.renderLi()).join('')
	}
}