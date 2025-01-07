import Image from 'next/image';

const FEATURED_IMAGES = [
  {
    id: 1,
    src: '/featured/1.png',  
    alt: '图片 1',
  },
  {
    id: 2,
    src: '/featured/2.png',
    alt: '图片 2',
  },
  {
    id: 3,
    src: '/featured/2.png',
    alt: '图片 3',
  },
  {
    id: 4,
    src: '/featured/1.png',
    alt: '图片 4',
  } 
];

export default function FeaturedPage() {
  return (
    <div className="p-4 sm:p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center text-red-600">精品展示</h1>
        <div className="grid grid-cols-2 gap-4">
          {FEATURED_IMAGES.map((image) => (
            <div key={image.id} className="relative w-[280px] h-[475px] rounded-lg overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 