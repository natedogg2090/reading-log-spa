class Books {
	constructor() {
		this.books = []
		this.adapter = new BooksAdapter()
		this.initBindEventListeners()
		this.fetchAndLoadBooks()
		this.authors = new Authors()
		this.genres = new Genres()
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
		this.booksContainer.addEventListener('click', this.handleDivClick.bind(this))
		this.singleBook = document.getElementsByClassName('single-book')

	}

	handleDivClick(e) {

		let node = e.target.nodeName

		if (node === 'INPUT') {
			this.updateBook(e)
		} else if (node === 'BUTTON') {
			this.renderBooks()
		} else if (node === "A") {
			e.preventDefault()
			this.booksContainer.innerHTML = ''

			if (e.target.className === "author") {
				this.showAuthor(e.target.href.slice(-1))
			} else {
				this.showBook(e.target.href.slice(-1))
			}
		} else {
			let div = e.path.find(c => c.className === "single-book")

			this.booksContainer.innerHTML = ''
			this.booksContainer.appendChild(div)
			this.renderNav()
		}
	}

	fetchAndLoadBooks() {
		this.adapter
		.getBooks()
		.then(books => {
			books.data.forEach(book => this.books.push(new Book(book))) // pushing a new book instance into the array
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
		this.booksContainer.innerHTML = ''

		this.books.map(book => this.booksContainer.appendChild(book.renderBook()))
	}

	createBook(e) {
		e.preventDefault()

		const title = this.bookTitle.value
		const summary = this.bookSummary.value
		const authorName = this.bookAuthor.value
		const genreName = this.bookGenre.value

		this.adapter.createBook(title, summary, authorName, genreName).then(book => {
			this.books.push(new Book(book.data))
			this.bookTitle.value = ''
			this.bookSummary.value = ''
			this.bookAuthor.value = ''
			this.bookGenre.value = ''
			this.renderBooks()
		})
	}

	filterList(e) {

		let selectFilter = e.target.value

		if (selectFilter === "author") {
			this.authors.renderAuthors()
		} else if (selectFilter === "genre") {
			this.genres.renderGenres()
		} else if (selectFilter === "books") {
			this.renderBooks()
		}
	}

	renderNav() {
		let btn = document.createElement('button')
		btn.setAttribute('class', "show-all-books")
		btn.innerHTML = "All Books"

		this.booksContainer.appendChild(btn)
	}

	showAuthor(id) {

		let author = this.authors.authors.find(auth => auth.id === id)

		this.booksContainer.appendChild(author.renderAuthor())

		this.renderNav()
	}

	showBook(id) {

		let book = this.books.find(book => book.id === id)

		this.booksContainer.appendChild(book.renderBook())

		this.renderNav()
	}

	updateBook(e) {

		let checked = e.target.checked
		let id = e.target.id

		this.adapter.updateBook(id, checked)
	}

}