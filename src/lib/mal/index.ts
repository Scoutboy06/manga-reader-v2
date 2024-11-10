import { unstable_cache } from 'next/cache'
import type { Manga } from './types'

async function __fetchMAL(path: string) {
  if (!process.env.MAL_ID) {
    throw new Error('Environment variable `MAL_ID` is invalid')
  }

  const url = new URL(path, 'https://api.myanimelist.net/')

  const res = await fetch(url, {
    headers: {
      'X-MAL-CLIENT-ID': process.env.MAL_ID,
    },
  })

  if (!res.ok) {
    throw new Error(await res.text())
  }

  const json = await res.json()

  return json
}

// prettier-ignore
const MANGA_DETAILS_FIELDS = ["id", "title", "main_picture", "alternative_titles", "start_date", "end_date", "synopsis", "mean", "rank", "popularity", "num_list_users", "num_scoring_users", "nsfw", "created_at", "media_type", "status", "genres", "my_list_stalist_status", "num_volumes", "num_chapters", "authors{first_name,last_name}", "pictures", "background", "related_manga", "recommendations", "serialization{name}"].join(',')

async function getMangaDetails(id: string | number) {
  const urlPath = `/v2/manga/${id}?fields=${MANGA_DETAILS_FIELDS}`
  return fetchMAL(urlPath) as Promise<Manga | null>
}

const fetchMAL = unstable_cache(__fetchMAL, [], {
  revalidate: 2 * 24 * 60 * 60, // 2 days
})

const MAL = {
  fetchMAL,
  getMangaDetails,
}

export default MAL
