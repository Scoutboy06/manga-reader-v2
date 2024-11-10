import MAL from '@/lib/mal'
import { unstable_cache } from 'next/cache'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import payload from 'payload'

const getCachedManga = unstable_cache(
  ({ slug: string }) =>
    payload.find({
      collection: 'manga',
      limit: 1,
    }),
  // ['manga'],
  // {
  //   revalidate: 1 * 3600,
  // },
)

export default async function MangaPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug

  const manga = await MAL.getMangaDetails(2)
  if (!manga) notFound()

  return (
    <div>
      <main className="flex p-6 gap-6">
        <div className="w-1/3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={manga.main_picture.large} alt={manga.title} className="w-full" />
        </div>

        <div className="w-2/3">
          <h1 className="text-4xl">{manga.title}</h1>

          <p>{manga.synopsis}</p>
        </div>
      </main>

      {manga.related_manga?.length && (
        <section>
          {manga.related_manga.map((manga) => (
            <Link key={manga.node.id} href={`/mangas/${manga.node.id}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={manga.node.main_picture.medium} alt={manga.node.title} />
              {manga.node.title}
            </Link>
          ))}
        </section>
      )}
    </div>
  )
}
