import Link from 'next/link'

const navItems = [
  { label: 'Home', link: '/' },
  { label: 'Contact', link: '/contact' },
  { label: 'About', link: '/about' },
]

export default async function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center border-t border-gray-800 p-4 gap-4 text-center">
      <nav>
        <ul>
          {Object.values(navItems).map((item) => (
            <li key={item.link}>
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col gap-2">
        <span>&copy; 2024 Manga Reader</span>
        <span>
          We do not store any files on our server, we only link to media which is hosted on 3rd
          party services.
        </span>
      </div>
    </footer>
  )
}
