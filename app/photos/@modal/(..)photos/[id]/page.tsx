import Modal from '@/components/Modal'
import PhotoCard from '@/components/PhotoCard'
import { Photo, photos } from '@/lib/photos'

function PhotoModal({
  params: { id },
}: {
  params: {
    id: string
  }
}) {
  const photo: Photo = photos.find((photo) => photo.id == id)!
  return (
    <Modal>
      <PhotoCard photos={photo} />
    </Modal>
  )
}

export default PhotoModal
