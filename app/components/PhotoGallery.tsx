import Image from 'next/image';

interface PhotoGalleryProps {
  images: string[];
}

export default function PhotoGallery({ images }: PhotoGalleryProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((src, index) => (
        <div key={index} className="relative h-64">
          <Image src={src} alt={`Fromis_9 Photo ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
      ))}
    </div>
  );
}