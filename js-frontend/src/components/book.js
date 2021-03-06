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

		let close = document.createElement('span')
		close.innerHTML = "X"


		let input = document.createElement('input')
		let inputDiv = document.createElement('div')
		input.setAttribute('type', 'checkbox')
		input.setAttribute('id', `${this.id}`)
		input.setAttribute('value', `${this.title}`)

		if (this.complete) {
			input.setAttribute('checked', true)
			div.setAttribute('style', 'background: lightgray;')
		}

		inputDiv.appendChild(input)
		div.appendChild(inputDiv)


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
		a.setAttribute('class', "author")
		a.innerHTML = `${this.author.name}`
		authorName.appendChild(a)

		let sumDiv = document.createElement('div')
		sumDiv.setAttribute('class', 'book-summary')

		let p = document.createElement('p')
		p.innerHTML = `${this.summary}`

		div.appendChild(close)
		content.appendChild(header)
		authorDiv.appendChild(authorName)
		content.appendChild(authorDiv)
		sumDiv.appendChild(p)
		content.appendChild(sumDiv)
		div.appendChild(content)

		return div
	}

}