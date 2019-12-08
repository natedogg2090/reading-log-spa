class GenresAdapter {
	constructor() {
		this.baseUrl = 'http://localhost:3000/api/v1/genres'
	}

	getGenres() {
		return fetch(this.baseUrl).then(res => res.json())
	}
}