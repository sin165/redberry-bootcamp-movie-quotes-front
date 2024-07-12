export type Genre = {
  id: number
  name: string
}

export type Movie = {
  id: number
  title: string
  director: string
  description: string
  year: number
  genres: Genre[]
  poster: string
}
