import Image from 'next/image';

interface MemberProfileProps {
  name: string;
  position: string;
  imageSrc: string;
  bio: string;
}

export default function MemberProfile({ name, position, imageSrc, bio }: MemberProfileProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 text-center">
      <Image src={imageSrc} alt={name} width={150} height={150} className="rounded-full mx-auto" />
      <h3 className="text-xl font-semibold mt-4">{name}</h3>
      <p className="text-pink-500">{position}</p>
      <p className="text-gray-600 mt-2">{bio}</p>
    </div>
  );
}
