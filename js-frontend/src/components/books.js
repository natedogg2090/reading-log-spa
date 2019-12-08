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

		// function compareValues(key, order = 'asc') {
		// 	return function innerSort(a, b) {
	 //    		if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
	 //      			return 0;
	 //      		}

		// 	    const varA = (typeof a[key] === 'string')
		// 	      ? a[key].toUpperCase() : a[key];
		// 	    const varB = (typeof b[key] === 'string')
		// 	      ? b[key].toUpperCase() : b[key];

		// 	    let comparison = 0;
			
		// 	    if (varA > varB) {
		// 	      comparison = 1;
		// 	    } else if (varA < varB) {
		// 	      comparison = -1;
		// 	    }
		// 	    return (
		// 	      (order === 'desc') ? (comparison * -1) : comparison
		// 	    );
		// 	};
		// }
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
}