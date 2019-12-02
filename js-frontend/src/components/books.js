class Books {
	constructor() {
		this.books = []
		this.adapter = new BooksAdapter()
		this.initBindEventListeners()
		this.fetchAndLoadBooks()
	}

	initBindEventListeners() {
		this.booksContainer = document.getElementById('books-container')
		this.bookTitle = document.getElementById('new-book-title')
		this.bookSummary = document.getElementById('new-book-summary')
		this.bookForm = document.getElementById('new-book-form')
		this.bookForm.addEventListener('submit', this.createBook.bind(this)) // bind the this inside Book class
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

	createBook(e) {
		e.preventDefault()

		const title = this.bookTitle.value
		const summary = this.bookSummary.value

		this.adapter.createBook(title, summary).then(book => {
			this.books.push(new Book(book))
			this.bookTitle.value = ''
			this.bookSummary.value = ''
			this.renderBooks()
		})
	}
}