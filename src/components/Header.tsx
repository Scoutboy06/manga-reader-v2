import Link from 'next/link'

const navItems = [
  { label: 'Popular', link: '/mangas/popular' },
  { label: 'Newest', link: '/mangas/newest' },
  { label: 'Updated', link: '/mangas/updated' },
  { label: 'Top 100', link: '/mangas/top-100' },
  { label: 'Random', link: '/mangas/random' },
] as const

export default async function Header() {
  return (
    <header className="flex items-center justify-between p-6 sticky top-0 z-10">
      <nav
        className="flex items-center gap-4"
        itemScope
        itemType="http://schema.org/SiteNavigationElement"
      >
        <Link href="/" className="font-bold">
          MR
        </Link>

        <ul className="flex flex-nowrap text-nowrap gap-4">
          {Object.values(navItems).map((item) => (
            <li key={item.link}>
              <Link href={item.link} itemProp="url">
                <span itemProp="name">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <input className="py-1" type="text" placeholder="Search mangas" />
      </div>
    </header>
  )
}
