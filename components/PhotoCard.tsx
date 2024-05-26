import { Photo } from '@/lib/photos'
import Image from 'next/image'

function PhotoCard({ photos }: { photos: Photo }) {
  return (
    <>
      <Image
        alt=""
        src={photos.imageSrc}
        width={600}
        height={600}
        className="col-span-1 aspect-square object-cover w-full"
      />
      <div className="bg-white p-2 px-4">
        <h3 className="text-xl font-serif font-medium">{photos.name}</h3>
        <p className="text-gray-600 text-sm">Taken by {photos.username}</p>
      </div>
    </>
  )
}

export default PhotoCard
