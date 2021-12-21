export type TDiscoverResults = {
	poster_path?: string | null
	adult?: boolean
	overview?: string
	release_date?: string
	genre_ids?: string[]
	id?: number
	original_title?: string
	name?: string
	original_language?: string
	title?: string
	backdrop_path?: string | null
	popularity?: number
	vote_count?: number
	video?: boolean
	vote_average?: number
}

export interface IDiscover {
	page: number
	results: TDiscoverResults[]
	total_results: number
	total_pages: number
}

export const fetchMovies: () => Promise<IDiscover> = async () => {
	try {
		const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=92b418e837b833be308bbfb1fb2aca1e&language=en-US&sort_by=popularity.asc&include_adult=false`)
		return await response.json()
	} catch (error) {
		throw error
	}
}

export const fetchTV: () => Promise<IDiscover> = async () => {
	try {
		const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=92b418e837b833be308bbfb1fb2aca1e&language=en-US&sort_by=popularity.asc&include_adult=false`)
		return await response.json()
	} catch (error) {
		throw error
	}
}

export const search: (title: string) => Promise<IDiscover> = async (title) => {
	try {
		const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=92b418e837b833be308bbfb1fb2aca1e&language=en-US&query=${title}&page=1&include_adult=false`)
		return await response.json();
	} catch (error) {
		throw error
	}
}