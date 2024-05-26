import { photos } from '@/lib/photos'
import Image from 'next/image'
import Link from 'next/link'

function Photos() {
  return (
    <section className="py-24">
      <div className="container">
        <h1 className="font-serif text-3xl font-bold text-sky-900"></h1>
        <ul className="mt-10 grid grid-cols-3 gap-4 auto-rows-max">
          {photos.map((photo) => (
            <li key={photo.id}>
              <Link href={`/photos/${photo.id}`}>
                <Image
                  src={photo.imageSrc}
                  alt={photo.name}
                  width={600}
                  height={600}
                  className="aspect-square object-cover rounded w-full"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Photos
