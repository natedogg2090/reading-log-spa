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
		this.filterDropdown = document.querySelector('#filter-dropdown')
		this.filterDropdown.addEventListener('change', this.filterList)
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
		let sortedBooksArray = this.books.sort( (a, b) => {
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
		this.booksContainer.innerHTML = this.books.map(book => book.renderCheckbox()).join('')

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

		this.adapter.createBook(title, summary).then(book => {
			this.books.push(new Book(book))
			this.bookTitle.value = ''
			this.bookSummary.value = ''
			this.renderBooks()
		})
	}

	// bookCompleted() {
	// 	const checkedInput = document.querySelector(`[name="book-${this.id}"]`)
	// 	console.log(this)
	// }

	filterList(e) {
		// console.log(e.target.value)
		let selectFilter = e.target.value

		if (selectFilter === "author") {
			console.log("you should see a filtered list of authors")
		} else if (selectFilter === "genre") {
			console.log("you should see a filtered list of genres")
		} else {
			console.log("alphabetically sort all books")
			console.log(this.books)
		}
	}
}