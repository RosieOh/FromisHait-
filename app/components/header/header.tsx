// app/components/Header.tsx

"use client";

import Link from 'next/link';
import { useState } from 'react';
import {
  HeaderContainer,
  HeaderContent,
  NavList,
  MobileButton,
  MobileMenu,
} from './style';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <HeaderContent>
        <h1 className="text-2xl font-bold">
          <Link href="/">
            Fromis_9 Fanpage
          </Link>
        </h1>
        <nav>
          <MobileButton onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </MobileButton>
          <NavList className="md:flex hidden">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/members">Members</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/news">News</Link>
            </li>
          </NavList>
        </nav>
      </HeaderContent>

      {isOpen && (
        <MobileMenu>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/members">Members</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
}
