class Genres {
	constructor() {
		this.genres = []
		this.adapter = new GenresAdapter()
		this.fetchGenres()
	}

	fetchGenres() {
		this.adapter
		.getGenres()
		.then(genre => {
			genres.data.forEach(author => this.genres.push(new Genre(genre)))
		})
		.then(() => {
			// this.sortGenres()
			console.log(this.genres)
		})
	}

	sortGenres() {
		this.genres.sort( (a, b) => {
			const nameA = a.name
			const nameB = b.name

			let comp = 0

			if (nameA > nameB) {
				comp = 1
			} else if (nameA < nameB) {
				comp = -1
			}

			return comp

		})
	}
}