class Books {
	constructor() {
		this.books = []
		this.adapter = new BooksAdapter()
		this.initBindEventListeners()
		this.fetchAndLoadBooks()
		this.authors = new Authors()
	}

	initBindEventListeners() {
		this.booksContainer = document.getElementById('books-container')
		this.bookTitle = document.getElementById('new-book-title')
		this.bookSummary = document.getElementById('new-book-summary')
		this.bookAuthor = document.getElementById('new-book-author')
		this.bookGenre = document.getElementById('new-book-genre')
		this.bookForm = document.getElementById('new-book-form')
		this.bookForm.addEventListener('submit', this.createBook.bind(this)) // bind the this inside Book class
		this.filterDropdown = document.querySelector('#filter-dropdown')
		this.filterDropdown.addEventListener('change', this.filterList.bind(this))
	}

	fetchAndLoadBooks() {
		this.adapter
		.getBooks()
		.then(books => {
			books.forEach(book => this.books.push(new Book(book))) // pushing a new book instance into the array
		})
		.then(() => {
			this.sortBooks()
			this.renderBooks()
		})
	}

	sortBooks() {
		this.books.sort( (a, b) => {
			const titleA = a.title
			const titleB = b.title

			let comp = 0

			if (titleA > titleB) {
				comp = 1
			} else if (titleA < titleB) {
				comp = -1
			}

			return comp

		})		
	}

	renderBooks() {
		this.books.map(book => this.booksContainer.appendChild(book.renderBook()))

		// this.applyCheckboxListener()
	}

	// applyCheckboxListener() {
	// 	const checkboxArray = document.querySelectorAll('[type="checkbox"]')

	// 	checkboxArray.forEach(book => book.addEventListener('click', this.bookCompleted.bind(this)))
	// }

	createBook(e) {
		e.preventDefault()

		const title = this.bookTitle.value
		const summary = this.bookSummary.value
		const name = this.bookAuthor.value
		const genreName = this.bookGenre.value

		this.adapter.createBook(title, summary, name, genreName).then(book => {
			this.books.push(new Book(book))
			this.bookTitle.value = ''
			this.bookSummary.value = ''
			this.bookAuthor.value = ''
			this.bookGenre.value = ''
			this.renderBooks()
		})
	}

	// bookCompleted() {
	// 	const checkedInput = document.querySelector(`[name="book-${this.id}"]`)
	// 	console.log(this)
	// }

	filterList(e) {

		let selectFilter = e.target.value

		if (selectFilter === "author") {

			this.authors.renderAuthors()

		} else if (selectFilter === "genre") {
			console.log("you should see a filtered list of genres")
		} else if (selectFilter === "blank") {
			
			this.renderBooks()
		}
	}
}