// app/page.tsx

"use client";

import { useState, useRef, useEffect } from 'react';
import MemberProfile from './components/MemberProfile';
import PhotoGallery from './components/PhotoGallery';
import LatestNews from './components/LatestNews';

export default function Home() {
  const [isMusicOn, setIsMusicOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current && isMusicOn) {
      audioRef.current.play();
    }
  }, [isMusicOn]);

  const members = [
    {
      name: "노지선",
      position: "리더, 리드보컬",
      imageSrc: "/images/nogis_jeon.jpg",
      bio: "프로미스나인의 리더로서 팀을 이끌며 뛰어난 리드보컬입니다.",
    },
    // 다른 멤버들 추가
  ];

  const photos = [
    '/images/photo1.jpg',
    '/images/photo2.jpg',
    // 추가 사진들
  ];

  const newsItems = [
    {
      id: 1,
      title: "Fromis_9 Releases New Album!",
      date: "August 30, 2024",
      summary: "Fromis_9 has just released their highly anticipated new album...",
      link: "/news/1",
    },
    // 더 많은 뉴스 아이템들
  ];

  return (
    <div>
      <audio
        ref={audioRef}
        src="/background-music.mp3" // 배경음악 파일 경로
        loop
        muted={!isMusicOn} // 음소거 상태는 isMusicOn에 따라 조정
      />
      
      <button
        onClick={() => setIsMusicOn(!isMusicOn)}
        className="fixed bottom-4 right-4 p-2 bg-pink-500 text-white rounded-lg shadow-md transition-colors duration-300 hover:bg-pink-600"
      >
        {isMusicOn ? "Mute Music" : "Play Music"}
      </button>

      <section className="py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <MemberProfile
              key={index}
              name={member.name}
              position={member.position}
              imageSrc={member.imageSrc}
              bio={member.bio}
            />
          ))}
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Photo Gallery</h2>
        <PhotoGallery images={photos} />
      </section>

      <section className="py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Latest News</h2>
        <LatestNews newsItems={newsItems} />
      </section>
    </div>
  );
}
