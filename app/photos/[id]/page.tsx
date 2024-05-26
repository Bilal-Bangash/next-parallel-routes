import PhotoCard from '@/components/PhotoCard'
import { Photo, photos } from '@/lib/photos'
import Link from 'next/link'

function PhotoPage({
  params: { id },
}: {
  params: {
    id: string
  }
}) {
  const photo: Photo = photos.find((photo) => photo.id == id)!
  return (
    <section className="py-24">
      <div className="container">
        <div>
          <Link
            href={'/photos'}
            className="font-semibold italic text-sky-600 underline"
          >
            Back to photos
          </Link>
        </div>
        <div className="mt-10 w-1/3">
          <PhotoCard photos={photo} />
        </div>
      </div>
    </section>
  )
}

export default PhotoPage
