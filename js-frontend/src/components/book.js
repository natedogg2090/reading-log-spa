class Book {
	constructor(bookJSON) {
		this.id = bookJSON.id
		this.title = bookJSON.attributes.title
		this.summary = bookJSON.attributes.summary
		this.complete = bookJSON.attributes.complete
		this.author = bookJSON.attributes.author
	}

	renderBook() {

		let div = document.createElement('div')
		div.setAttribute('class', `single-book`)
		div.setAttribute('id', `${this.id}`)

		let input = document.createElement('input')
		input.setAttribute('type', 'checkbox')
		input.setAttribute('id', `${this.id}`)
		input.setAttribute('value', `${this.title}`)
		if (this.complete === true) {
			input.setAttribute('checked', 'checked')
		}
		div.appendChild(input)

		let content = document.createElement('div')
		content.setAttribute('class', 'content')

		let header = document.createElement('h3')
		header.innerHTML = `${this.title}`

		let authorDiv = document.createElement('div')
		authorDiv.setAttribute('class', 'author-id')
		authorDiv.setAttribute('id', `${this.author.id}`)

		let authorName = document.createElement('h4')

		let a = document.createElement('a')
		a.setAttribute('href', `${this.author.id}`)
		a.innerHTML = `${this.author.name}`
		authorName.appendChild(a)

		let sumDiv = document.createElement('div')
		sumDiv.setAttribute('class', 'book-summary')

		let p = document.createElement('p')
		p.innerHTML = `${this.summary}`

		content.appendChild(header)
		div.appendChild(content)
		authorDiv.appendChild(authorName)
		div.appendChild(authorDiv)
		sumDiv.appendChild(p)
		div.appendChild(sumDiv)

		return div
	}

}