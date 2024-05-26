import Link from 'next/link'

const Header = () => {
  return (
    <header className="py-10">
      <div className="container">
        <nav>
          <ul className="flex items-center justify-center gap-10 text-lg font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
