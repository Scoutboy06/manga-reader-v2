export type Author = {
  id: string
  first_name: string
  last_name: string
}

export type Manga = {
  id: number
  title: string
  main_picture: {
    medium: string
    large: string
  }
  alternative_titles: {
    synonyms: string[]
    en: string
    ja: string
  }
  start_date: string
  synopsis: string
  mean: number
  rank: number
  popularity: number
  num_list_users: number
  num_scoring_users: number
  nsfw: string
  created_at: string
  media_type: 'manga' // TODO: Add more types
  status: 'currently_publishing' // TODO: Add more types
  genres: Array<{
    id: number
    name: string
  }>
  num_volumes: number
  num_chapters: number
  authors: Array<{
    node: Author
    role: string
  }>
  pictures: Array<{
    medium: string
    large: string
  }>
  background: string
  related_manga: Array<{
    node: Pick<Manga, 'id' | 'title' | 'main_picture'>
    relation_type?: string
    relation_type_formatted?: string
    num_recommendations?: number
  }>
  serialization: Array<{
    node: {
      id: number
      name: string
    }
  }>
}
