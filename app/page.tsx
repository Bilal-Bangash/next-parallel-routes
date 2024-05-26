import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="py-24">
      <div className="container">
        <h1 className="font-serif text-3x1 font-bold text-sky-900">
          Intercepting Routes
        </h1>
        <div className="mt-10">
          <Link
            href="/photos"
            className="font-semi-bold text-3x1 text-sky-600 italic underline"
          >
            Go to photos
          </Link>
        </div>
      </div>
    </section>
  )
}
