class Book {
	constructor(bookJSON) {
		this.id = bookJSON.id
		this.title = bookJSON.attributes.title
		this.summary = bookJSON.attributes.summary
		this.author = bookJSON.attributes.author
	}

	renderBook() {

		let div = document.createElement('div')
		div.setAttribute('class', `single-book`)

		let content = document.createElement('div')
		content.setAttribute('class', 'content')
		content.setAttribute('id', `${this.id}`)
		

		let header = document.createElement('h3')
		header.setAttribute('id', `${this.id}`)
		header.innerHTML = `${this.title}`

		let a = document.createElement('a')
		a.setAttribute('href', `https://localhost:3000/api/v1/authors/${this.author.id}`)
		a.innerHTML = `${this.author.name}`

		let authorName = document.createElement('h4')

		let sumDiv = document.createElement('div')
		sumDiv.setAttribute('class', 'book-summary')
		sumDiv.setAttribute('id', `${this.id}`)

		let p = document.createElement('p')
		p.setAttribute('id', `${this.id}`)
		p.innerHTML = `${this.summary}`

		content.appendChild(header)
		authorName.appendChild(a)

		div.appendChild(content)
		div.appendChild(authorName)
		sumDiv.appendChild(p)
		div.appendChild(sumDiv)

		return div
	}

}