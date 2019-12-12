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
	}

	listen() {
		let divItems = document.getElementsByClassName('single-book')

		for (let book of divItems) {
			book.addEventListener('click', this.showBook.bind(this))
		}

		// let btn = document.querySelectorAll('button')
		
		// for (let b of btn) {
		// 	b.addEventListener('click', () => {console.log('hi')})
		// }

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

		this.listen()

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

	showBook(e) {
		// refactor...this is doing more than just showing the book
		this.booksContainer.innerHTML = ''

		let div = e.path.filter(node => node.className === 'single-book')

		let b = this.books.find(oneBook => oneBook.id === div[0].id)

		this.booksContainer.appendChild(b.renderBook())

		this.booksContainer.appendChild(this.renderNav())

		// let eventArr = e.path

		// let author = eventArr.find(node => node.className === 'author-id')

		// if (author) {
		// 	let auth = this.authors.authors.find(auth => auth.id === author.id)

		// 	this.authors.showAuthor(auth)

		// } else {
		// 	let div = eventArr.filter(node => node.className === 'single-book')

		// 	let b = this.books.find(oneBook => oneBook.id === div[0].id)

		// 	this.booksContainer.appendChild(b.renderBook())

		// 	this.booksContainer.appendChild(this.renderNav())
		// }

	}

	renderNav() {
		let btn = document.createElement('button')
		btn.setAttribute('class', "show-all-books")
		btn.innerHTML = "All Books"

		btn.addEventListener('click', () => {this.renderBooks()})

		return btn
	}
}